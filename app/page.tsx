import PageLayout from '@src/components/page-layout';
import { cookies } from 'next/headers';
import { MixedSizes } from 'react-resizable-panels';

export default function App() {
  const defaultLayout = getDefaultLayout();

  return (
    <main className="h-full">
      <PageLayout defaultLayout={defaultLayout} />
    </main>
  );
}

function getDefaultLayout(): MixedSizes[] {
  const layout = cookies().get('page:layout');
  if (layout) {
    return JSON.parse(layout.value);
  }
  return [
    {
      sizePixels: 180,
      sizePercentage: 20,
    },
    {
      sizePixels: 618, // 阅读区默认宽
      sizePercentage: 80,
    },
  ];
}
