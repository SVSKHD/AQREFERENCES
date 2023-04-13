import { Card } from "react-bootstrap"
const AuthFooter = () => {
    let Year = new Date().getFullYear();
    return (
        <>
        <div>
            <Card className="fixed-bottom aqua-footer">
                <Card.Body className="text-center">
                <h6 className="text-dark text-center">Aquakart © {Year}</h6>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}
export default AuthFooter