
import {Button} from "@repo/ui"
import { formatCurrency } from "@repo/utils"
const App = () => {
  return (
    <>
      <div>Complete frontend development react monorepo</div>
      <Button onClick={()=> {alert(formatCurrency(112233))}}/>
        <h1>New Heading feature add on b feature/new</h1>
    </>
    
  )
}

export default App