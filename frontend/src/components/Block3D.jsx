export default function Block3D() {
  return (
    <div className="block3d-scene" aria-hidden="true">
      <div className="block3d-cube">
        <div className="block3d-face block3d-front">
          <span className="block3d-label">BLOCK</span>
          <span className="block3d-value">#842,190</span>
        </div>
        <div className="block3d-face block3d-back">
          <span className="block3d-label">HASH</span>
          <span className="block3d-value block3d-mini">0x4a2f...9e1c</span>
        </div>
        <div className="block3d-face block3d-right">
          <span className="block3d-label">NONCE</span>
          <span className="block3d-value">18,224</span>
        </div>
        <div className="block3d-face block3d-left">
          <span className="block3d-label">PREV</span>
          <span className="block3d-value block3d-mini">0x1c88...7b3a</span>
        </div>
        <div className="block3d-face block3d-top" />
        <div className="block3d-face block3d-bottom" />
      </div>
    </div>
  );
}
