export default function Container({ className, children }) {
    return (
        <div className={className ? `${className} container` : 'container'}>{children}</div>
    )
}