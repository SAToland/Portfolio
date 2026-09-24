import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

// Renders a phone-shaped frame around a screenshot. When `src` is null it draws
// a labeled placeholder instead, so the layout is final before real captures
// exist — dropping a screenshot in later is a one-line data change.
function PhoneFrame({ src, alt, caption, className = '' }) {
    return (
        <figure className={`phoneFrame ${className}`}>
            <div className="phoneFrameBody">
                {/* Only on the placeholder. Real captures already include the
                    device's own status and navigation bars, and an overlaid
                    notch would sit on top of the app's header. */}
                {!src && <span className="phoneFrameNotch" aria-hidden="true" />}
                {src ? (
                    <img className="phoneFrameShot" src={src} alt={alt || caption} loading="lazy" />
                ) : (
                    <div className="phoneFramePlaceholder">
                        <PhoneIphoneIcon />
                        <span>Screenshot</span>
                    </div>
                )}
            </div>
            {caption && <figcaption className="phoneFrameCaption">{caption}</figcaption>}
        </figure>
    );
}

export default PhoneFrame;
