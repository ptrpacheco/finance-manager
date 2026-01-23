import { View } from 'react-native';
import { BlurView } from 'expo-blur';
import Line from '@/components/Line';
import DotPattern from '@/components/DotPattern';

type StickyFooterProps = {
  children: React.ReactNode;
};

export default function StickyFooter({ children }: StickyFooterProps) {
  return (
    <BlurView
      className="absolute bottom-0 z-10 h-24 w-full flex-col gap-4 overflow-hidden"
      intensity={40}
      tint="dark">
      <DotPattern location={[1, 0.2]} />
      <Line />
      {children}
    </BlurView>
  );
}
