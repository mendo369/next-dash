export default function LoginHandler(req, res) {
    const { email, password } = req.body
    if (email == 'test@test.com' && password == 'contraseña') {
        return res.json('accediendo')
    }
    return res.json('email or password invalid')
}