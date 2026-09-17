
import {Button} from "@repo/ui"
import { formatCurrency } from "@repo/utils"
const App = () => {
  return (
    <>
      <div>Complete frontend development react monorepo</div>
      <Button onClick={()=> {alert(formatCurrency(112233))}}/>
        <h2>New Heading feature add on b feature/new</h2>
    </>
    
  )
}

export default App