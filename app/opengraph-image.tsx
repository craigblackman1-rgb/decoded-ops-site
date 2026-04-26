import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Decoded Ops — Technology for Print & Embroidery Businesses';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const nodes = ['Order Mgmt', 'eCommerce', 'Despatch', 'Accounts', 'Production', 'ERP / MIS'];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '#F8F9FA',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Left panel */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 60px 60px 80px',
            width: '58%',
            gap: 0,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              backgroundColor: '#023047',
              color: '#8ECAE6',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 2,
              padding: '6px 16px',
              borderRadius: 20,
              marginBottom: 28,
              width: 'fit-content',
            }}
          >
            OPERATIONS & TECHNOLOGY CONSULTANCY
          </div>

          {/* Brand name */}
          <div
            style={{
              display: 'flex',
              fontSize: 80,
              fontWeight: 800,
              color: '#023047',
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            Decoded
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 80,
              fontWeight: 800,
              color: '#219EBC',
              lineHeight: 1,
              marginBottom: 28,
            }}
          >
            Ops
          </div>

          {/* Tagline */}
          <div
            style={{
              display: 'flex',
              fontSize: 20,
              color: '#023047',
              opacity: 0.6,
              lineHeight: 1.5,
              marginBottom: 40,
            }}
          >
            Technology consultancy for print, embroidery, and decoration businesses.
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ display: 'flex', fontSize: 30, fontWeight: 800, color: '#023047' }}>25 yrs</div>
              <div style={{ display: 'flex', fontSize: 13, color: '#023047', opacity: 0.5 }}>in the sector</div>
            </div>
            <div style={{ display: 'flex', width: 1, height: 50, backgroundColor: '#023047', opacity: 0.15 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ display: 'flex', fontSize: 30, fontWeight: 800, color: '#023047' }}>£395</div>
              <div style={{ display: 'flex', fontSize: 13, color: '#023047', opacity: 0.5 }}>Clarity Audit</div>
            </div>
            <div style={{ display: 'flex', width: 1, height: 50, backgroundColor: '#023047', opacity: 0.15 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ display: 'flex', fontSize: 30, fontWeight: 800, color: '#219EBC' }}>3× guarantee</div>
              <div style={{ display: 'flex', fontSize: 13, color: '#023047', opacity: 0.5 }}>or full refund</div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42%',
            backgroundColor: '#023047',
            gap: 24,
            padding: '40px 32px',
          }}
        >
          {/* Hub circle */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              height: 150,
              borderRadius: 75,
              backgroundColor: '#219EBC',
              border: '3px solid #8ECAE6',
              gap: 4,
            }}
          >
            <div style={{ display: 'flex', fontSize: 20, fontWeight: 800, color: '#F8F9FA', letterSpacing: 2 }}>DECODED</div>
            <div style={{ display: 'flex', fontSize: 20, fontWeight: 800, color: '#FFB703', letterSpacing: 2 }}>OPS</div>
            <div style={{ display: 'flex', fontSize: 10, color: '#8ECAE6', letterSpacing: 1, marginTop: 2 }}>audit & decode</div>
          </div>

          {/* Node pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              justifyContent: 'center',
              maxWidth: 340,
            }}
          >
            {nodes.map((label) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  padding: '7px 16px',
                  borderRadius: 20,
                  border: '1px solid rgba(142,202,230,0.35)',
                  color: '#8ECAE6',
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            backgroundColor: '#FFB703',
            display: 'flex',
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
