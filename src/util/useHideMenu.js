import { useEffect } from "react"

export const useHideMenu = ({ menuRef, setShowMenu }) => {

    const hideMenu = (e) => {
        if (!e.target.contains(menuRef.current)) {
            setShowMenu(false)
        }
    }
    useEffect(() => {
        window.addEventListener("click", hideMenu)
        return () => window.removeEventListener("click", hideMenu)
    }, [])
    return
}