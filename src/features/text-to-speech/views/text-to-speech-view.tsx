interface TextToSpeechViewProps {
  initialValues?: { text?: string; voiceId?: string };
}

export function TextToSpeechView({ initialValues: _ }: TextToSpeechViewProps) {
  return (
    <div className="flex flex-1 items-center justify-center text-muted-foreground">
      Text to Speech coming soon
    </div>
  );
}
