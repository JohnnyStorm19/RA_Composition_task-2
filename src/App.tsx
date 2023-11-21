import './App.css'
import { AdvBannerMain } from './components/Main/AdvBanner'
import { AdvertAside } from './components/Header/AdvertAside'
import { DataBlock } from './components/Footer/DataBlock'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HeaderNewsLinks } from './components/Header/HeaderNewsLinks'
import { Main } from './components/Main/Main'
import { NewsContainer } from './components/Header/NewsContainer'
import { SearchInput } from './components/Main/SearchInput'
import { SectionsRow } from './components/Main/SectionsRow'
import { StocksContainer } from './components/Main/StocksContainer'

function App() {
  return (
    <div className='app-container'>
      <Header 
        children={[
            <HeaderNewsLinks data={ [ {title: 'test', link: 'test'} ] }/>,
            <NewsContainer data={ [ {icon: '#', title: 'test', link: '#'}, {icon: '#', title: 'test1', link: '#'}] } />,
            <StocksContainer data={ 
              [
                {currency: 'USD', quantity: 100, gain: 0.2, link: '#', stockMarket: 'MOEX'}, 
                {currency: 'EUR', quantity: 110, gain: 0.5, link: '#', stockMarket: 'MOEX'}, 
                {currency: 'НЕФТЬ', quantity: 12, gain: 0.2, link: '#'}, 
              ]
            }/>,
            <AdvertAside image={'#'} data={ {title: 'Работа над ошибками', link: '#'} } description={'Смотрите на яндексе и запоминайте'} />
          ]
        }
      />
      <Main 
        children={[
          <SectionsRow data={ [ {title: 'Видео', link: '#'}, {title: 'Картинки', link: '#'}, {title: 'Новости', link: '#'} ] }/>,
          <SearchInput data={ {footerMain: 'Найдется все. Например,', footerExample: 'фаза луны сегодня'} }/>,
          <AdvBannerMain advData={ {url: '#'} }/>
        ]}
      />
      <Footer 
        children={[
          <DataBlock type={['weather', 'teleprogramm', 'recent', 'onAir']} data={ [{time: '04:20', title: 'Время', channel: 'Первый канал'}] }/>
        ]}
      />
    </div>
  )
}

export default App
