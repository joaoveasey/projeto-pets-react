import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    FacebookAuthProvider,
    GithubAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export const userAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState(null)
    const navigate = useNavigate()
    const auth = getAuth()
    
    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }

    async function createUser(data){
        checkIfIsCancelled()
        
        setLoading(true)
        setError(null)

        try{
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })
            
            setLoading(false)
            alert("Conta criada com sucesso!")
        }catch(error){
            console.error(error.message)
            console.table(typeof error.message)

            let systemErrorMessage

            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"
            } else if(error.message.includes("email-already")){
                systemErrorMessage = "E-mail já cadastrado"
            } else {
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde"
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    const logout = () => {
        checkIfIsCancelled()
        signOut(auth)
    }

    const login = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(false)

        try{
            await signInWithEmailAndPassword(auth, data.email, data.password)
            
            setLoading(false)
            navigate("/cachorros")
        }catch(error){
            console.error(error.message)
            console.table(typeof error.message)

            let systemErrorMessage

            if(error.message.includes("invalid-login-credentials")){
                systemErrorMessage = "Este usuário não está cadastrado"
            } else if(error.message.includes("wrong-password")){
                systemErrorMessage = "Erro nas credenciais"
            } else {
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde."
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    const loginWithFacebook = async () => {
        checkIfIsCancelled();
        setLoading(true)
        setError(null)

        
        try{
            const provider = new FacebookAuthProvider()
            await signInWithPopup(auth, provider)
            setLoading(false)
            navigate("/cachorros")
        } catch (error){
            console.error(error.message)

            let systemErrorMessage
            if(error.message.includes("account-exists-with-different-credential")){
                systemErrorMessage = "Conta existente com credencial diferente"
            } 
            else if(error.message.includes("auth/popup-closed-by-user")){
                systemErrorMessage = "A janela de login foi fechada antes da conclusão"
            }
            else{
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde"
            }

            setLoading(false)
            setError(systemErrorMessage)
          
        }
    }

    const loginWithGithub = async () => {
        checkIfIsCancelled()
        setLoading(true)
        setError(null)

        try{
            const provider = new GithubAuthProvider()
            await signInWithPopup(auth, provider)
            setLoading(false)
            navigate("/cachorros")
        } catch (error){
            console.error(error.message)

            let systemErrorMessage
            if(error.message.includes("account-exists-with-different-credential")){
                systemErrorMessage = "Conta existente com credencial diferente"
            } 
            else if(error.message.includes("auth/popup-closed-by-user")){
                systemErrorMessage = "A janela de login foi fechada antes da conclusão"
            }
            else{
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde"
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    useEffect(() => {
        return()=> setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
        loginWithFacebook,
        loginWithGithub
    }
}