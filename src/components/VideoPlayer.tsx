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
    <div className="w-full h-full px-4 flex flex-col justify-center">
      <div>
        <video
          className="w-[100%] md:w-[95%] lg:w-[90%] max-h-[calc(100vh-8rem)] h-auto mx-auto"
          src={url}
          controls
        />
      </div>
    </div>
  )
}
