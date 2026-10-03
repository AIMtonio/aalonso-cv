import { ImageResponse } from "next/og";

export const alt = "Antonio Alonso — Arquitecto de TI & Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#e5f7f5",
          background:
            "radial-gradient(circle at 0% 0%, rgba(42,125,136,0.55), transparent 55%), linear-gradient(180deg, #07161a, #0d2126)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            color: "#8ad9df",
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: 99, background: "#4ade80" }} />
          Abierto a oportunidades
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>
            Antonio Alonso
          </div>
          <div style={{ marginTop: 28, fontSize: 40, color: "#93b3b6", maxWidth: 900 }}>
            Arquitecto de TI · Backend Engineer
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["Java", "NestJS", "AWS", "Arquitectura de soluciones"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 99,
                fontSize: 26,
                color: "#8ad9df",
                background: "rgba(89,178,188,0.14)",
                border: "1px solid rgba(89,178,188,0.3)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
