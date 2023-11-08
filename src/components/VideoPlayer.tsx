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
    <div className="w-full h-full px-4 py-2 flex flex-col justify-center">
      {/* Offset for the banner at the top */}
      <div className="pb-8">
        <video
          className="w-[100%] h-auto"
          src={url}
          controls
        />
      </div>
    </div>
  )
}
