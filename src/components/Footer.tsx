export const Footer = () => {
    return (
        <footer className="site-footer py-6">
            <div className="container mx-auto px-6 text-center">
                <p className="footer-copy text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Akhil Ankathi. Crafted with
                    <span className="footer-heart text-red-400 mx-1" aria-hidden="true">♥</span>
                    and <span className="footer-tech">React</span>
                </p>
            </div>
        </footer>
    )
}