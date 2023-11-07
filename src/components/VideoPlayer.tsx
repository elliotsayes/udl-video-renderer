export type VideoInfo = {
  url: string;
}

interface Props {
  videoInfo: VideoInfo
}

export const VideoPlayer = (props: Props) => {
  const { videoInfo } = props;
  const { url } = videoInfo;

  return (
    <div>
      <video
        src={url}
        controls
      />
    </div>
  )
}
