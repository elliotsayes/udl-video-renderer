import { useEffect, useMemo, useState } from "react";

function hsl2rgb(h: number, s: number, b: number) {
  h *= 6;
  const s2 = [
    (b += s *= b < 0.5 ? b : 1 - b),
    b - (h % 1) * s * 2,
    (b -= s *= 2),
    b,
    b + (h % 1) * s,
    b + s,
  ];
  return [s2[~~h % 6]! * 255, s2[(h | 16) % 6]! * 255, s2[(h | 8) % 6]! * 255];
}

async function addressToHash(address?: string) {
  if (!address) {
    return;
  }
  const hashBuffer = await window.crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(address)
  );
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

function addressHashToColor(addressHash?: string) {
  if (!addressHash) {
    return [0, 0, 0];
  }
  const colors = hsl2rgb(
    parseInt(addressHash.substr(-7), 16) / 0xfffffff,
    0.25,
    0.6
  );
  return colors.map(Math.round);
}

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Props {
  address: string;
  size?: number;
}

export const Identicon: React.FC<Props> = (props: Props) => {
  const { size: sizeProp, address } = props;

  const size = sizeProp ?? 5;
  const cell = size / 5;
  const stroke = size * 0.04;

  const [addressHash, setAddressHash] = useState<string>();

  useEffect(() => {
    if (!addressHash) {
      (async () => {
        const addressHash = await addressToHash(address);
        setAddressHash(addressHash);
      })().catch(console.error);
    }
  }, [address, addressHash]);

  const computed = useMemo(() => {
    const color = `rgb(${addressHashToColor(addressHash).join(",")})`;
    
    const rects = [] as Rect[];
    if (!addressHash) {
      return {
        color,
        rects,
      };
    }
    for (let i = 0; i < 15; i++) {
      if (parseInt(addressHash.charAt(i), 16) % 2) {
        continue;
      }
      if (i < 5) {
        rects.push({
          x: 2 * cell + stroke,
          y: i * cell + stroke,
          w: cell,
          h: cell,
        });
      } else if (i < 10) {
        rects.push({
          x: 1 * cell + stroke,
          y: (i - 5) * cell + stroke,
          w: cell,
          h: cell,
        });
        rects.push({
          x: 3 * cell + stroke,
          y: (i - 5) * cell + stroke,
          w: cell,
          h: cell,
        });
      } else if (i < 15) {
        rects.push({
          x: 0 * cell + stroke,
          y: (i - 10) * cell + stroke,
          w: cell,
          h: cell,
        });
        rects.push({
          x: 4 * cell + stroke,
          y: (i - 10) * cell + stroke,
          w: cell,
          h: cell,
        });
      }
    }
    return {
      color,
      rects,
    };
  }, [addressHash, cell, stroke]);

  return (
    <div style={{width: size * 10, height: size * 10}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${size + stroke * 2} ${size + stroke * 2}`} style={{color: computed.color}}>
        <g style={{ strokeWidth: stroke, fill: "currentcolor", stroke: "currentcolor" }} strokeLinejoin="round">
          {
            computed.rects.map((rect, i) => {
              return (
                <rect
                  key={i}
                  x={rect.x}
                  y={rect.y}
                  width={rect.w}
                  height={rect.h}
                />
              );
            })
          }
        </g>
      </svg>
    </div>
  );
};
