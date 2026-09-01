import { ImageResponse } from 'next/og';

export const alt = 'Edna Social & Jazz Club in Helsinki';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const supporting =
    locale === 'fi'
      ? 'Elävää jazzia, keskusteluja ja kauniita iltoja.'
      : 'Live jazz, conversation and beautiful evenings.';

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#270006',
        color: '#F4F4F0',
        padding: '72px',
        fontFamily: 'Georgia, serif',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: '16px',
          letterSpacing: '.16em',
          textTransform: 'uppercase',
        }}
      >
        Social & Jazz Club · Helsinki
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: '34px',
          fontSize: '78px',
          letterSpacing: '.045em',
          lineHeight: '1',
          textTransform: 'uppercase',
        }}
      >
        Edna Social Club
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: '34px',
          fontSize: '25px',
          opacity: 0.82,
        }}
      >
        {supporting}
      </div>
    </div>,
    size,
  );
}
