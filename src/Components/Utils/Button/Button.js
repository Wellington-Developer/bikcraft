import './Button.css'

export const Button = ({children}) => {
  return (
    <button className="btn-cta font-1-m-b">{children}</button>
  )
}