export const Box = ({ color, children }) => (
    <div
      style={{
        background: `${color}`,
        borderRadius: "20px",
        padding: "10px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      {children}
    </div>
   );
   
   
   
   
   
   