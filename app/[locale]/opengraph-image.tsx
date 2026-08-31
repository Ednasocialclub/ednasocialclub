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
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#270006',
        color: '#F4F4F0',
        padding: '62px 72px',
        fontFamily: 'Georgia, serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(244,244,240,.42)',
          paddingBottom: '20px',
          fontSize: '18px',
          letterSpacing: '.13em',
          textTransform: 'uppercase',
        }}
      >
        <span>Social & Jazz Club</span>
        <span>Helsinki</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            fontSize: '190px',
            lineHeight: '.82',
            letterSpacing: '-.075em',
          }}
        >
          EDNA
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: '42px',
          }}
        >
          <span style={{ fontSize: '29px' }}>{supporting}</span>
          <span
            style={{
              fontSize: '20px',
              fontStyle: 'italic',
              opacity: 0.82,
            }}
          >
            The art of gathering.
          </span>
        </div>
      </div>
    </div>,
    size,
  );
}
