import { RendererLayout } from "./RendererLayout"

export const DefaultPage = () => {
  return (
    <RendererLayout>
      <div className="w-full h-full px-4 pb-16 flex flex-col justify-center items-center text-foreground/80">
        <p>
          This is a Renderer for UDL Videos
        </p>
        <p>
          Upload your own at{' '}
          <a
            href="https://udl-video-upload.arweave.dev/"
            target="_blank"
            className="underline"
          >
            udl-video-upload.arweave.dev
          </a>
        </p>
      </div>
    </RendererLayout>
  )
}
