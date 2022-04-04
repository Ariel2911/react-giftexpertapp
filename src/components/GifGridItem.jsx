export const GifGridItem = ({ id, title, url }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        borderRadius: '8px',
        margin: '4px',
        width: '150px',
        height: '160px',
      }}
    >
      <img src={url} alt={title} style={{ width: '100%', height: '75%' }} />
      <p
        style={{
          textAlign: 'center',
          height: '25%',
          margin: '0',
          overflow: 'hidden',
        }}
      >
        {title}
      </p>
    </div>
  );
};
