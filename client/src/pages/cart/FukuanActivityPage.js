import '../../index.scss'
import FukuanTopPhoto from '../../components/Cart/FukuanTopPhoto'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import ActivityOrderColumn2 from '../../components/Cart/ActivityOrderColumn2'
import DetailsAmount from '../../components/Cart/DetailsAmount'
import FukuanButton from '../../components/Cart/FukuanButton'

function FukuanActivityPage() {
  return (
    <>
      <FukuanTopPhoto />
      <ConfirmPuzzle />
      <ActivityOrderColumn2 />
      <DetailsAmount />
      <FukuanButton />
    </>
  )
}

export default FukuanActivityPage
