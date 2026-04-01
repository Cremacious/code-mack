import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: '#0369A1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#6EE7B7',
            fontSize: 14,
            fontWeight: 900,
            fontFamily: 'monospace',
            letterSpacing: -1,
          }}
        >
          CM
        </span>
      </div>
    ),
    { ...size },
  );
}
