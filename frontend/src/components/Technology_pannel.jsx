export default function Technology_pannel({ techCards = [] }){
  return (
    <div style={{
      width: '100%',
      maxWidth: '1100px',
      margin: '40px auto',
      fontFamily: 'inherit',
      padding: '0 20px'
    }}>
      <h1 style={{
        textAlign: 'center', fontSize: '2.5rem',
        fontWeight: 'bold', marginBottom: '34px'
      }}>
        Technology Stack That Krayzen Mobile Developers Use Proficiently
      </h1>
      <div>
        {techCards.map((section, idx) => (
          <div key={section.category + idx}
            style={{
              display: 'flex', alignItems: 'center', marginBottom: '16px',
              flexWrap: 'wrap'
            }}
            className="tech-row"
          >
            <div className="tech-category" style={{
              minWidth: '200px', background: '#065a89', color: '#fff',
              fontWeight: 'bold', fontSize: '1.17rem',
              padding: '18px 30px', borderRadius: '12px 0 0 12px',
              marginBottom: '8px', flex: 'none'
            }}>
              {section.category}
            </div>
            <div className="tech-items" style={{
              flex: '1', display: 'flex', flexWrap: 'wrap',
              background: '#eaf2f8', borderRadius: '0 12px 12px 0',
              padding: '12px 10px'
            }}>
              {section.items.map((item, itemIdx) => (
                <span key={item + itemIdx}
                  style={{
                    background: '#fff', color: '#065a89',
                    margin: '6px 8px 6px 0', padding: '10px 24px',
                    borderRadius: '10px', fontWeight: '500',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.054)',
                    fontSize: '1rem', whiteSpace: 'nowrap'
                  }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        display: 'flex', justifyContent: 'center',
        marginTop: '36px'
      }}>
        <button style={{
          background: '#065a89', color: '#fff',
          padding: '18px 46px', border: 'none',
          borderRadius: '8px', fontSize: '1.22rem',
          fontWeight: '600', cursor: 'pointer'
        }}>
          Share Your Requirement
        </button>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .tech-row {
            flex-wrap: wrap;
            flex-direction: column;
          }
          .tech-category {
            min-width: unset;
            border-radius: 12px 12px 0 0;
            width: 100%;
            text-align: left;
          }
          .tech-items {
            border-radius: 0 0 12px 12px;
            width: 100%;
          }
        }
        @media (max-width: 600px) {
          .tech-category {
            padding: 14px 16px;
            font-size: 1rem;
          }
          .tech-items span {
            padding: 9px 13px;
            font-size: .95rem;
          }
          h1 {
            font-size: 1.4rem;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}