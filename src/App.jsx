import React from "react";
import './App.css'
import NumDisplay from './numberDisplay'

export default function App(){
    // const Yekan =  ['صفر', 'یک', 'دو', 'سه', 'چهار', 'پنچ', 'شش', 'هفت', 'هشت', 'نه']
    // const dahHa =  ['یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده']
    // const Dahgan = ['ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود']
    // const Sadgan = ['صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد']
    // const zeros =  ['','هزار', 'میلیون', 'میلیار', 'بیلیون', 'بیلیارد', 'تریلیون', 'تریلیارد']

    const numBook = [
         ['','هزار', 'میلیون', 'میلیار', 'بیلیون', 'بیلیارد', 'تریلیون', 'تریلیارد'],
         ['صفر','', 'یک', 'دو', 'سه', 'چهار', 'پنچ', 'شش', 'هفت', 'هشت', 'نه'],
         ['یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'],
         ['ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
         ['صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد']
    ]

    function Copybtn(){

        console.clear()
        document.getElementById('num').value = ''

    }

    const [num,setNum] = React.useState()

    
    function GotNum(e) {

        let inp = String(e.target.value)
        let inpL = inp.length
        let mod = (inpL%3)
        let inpRev
        let tDinp = [[]]

        for(let i = inpL-1 ; i = 0 ; i--){
            // inpRev[Math.abs(i-inpL+1)] = inp[i]
            console.log(inp[i])
        }
        

        console.log(inpRev)




        // setNum(e.target.value)

    }


    return(
        <main>
            <div className="header">
                <h1>تبدیل عدد به حروف فارسی</h1>
            </div>

            <div className="inputs">
                <div >
                    <input type="number" name="" id="num" placeholder="عدد" onInput={GotNum}/>
                    <NumDisplay prop={num}></NumDisplay>
                </div>
                <i className="bi bi-arrow-down-up"></i>
                <div>
                    <input type="text" name="" id="text" placeholder="حروف" autoComplete="off" />
                    <div id="copyBtn" onClick={Copybtn}><i className="bi bi-clipboard"></i></div>
                </div>
            </div>
            <footer>
                <ul>
                    <li><a href="https://github.com/ArashkKH/num-to-text-persian-" target="_blank"><i
                                class="bi bi-github"></i></a></li>
                    <li><a href="https://www.arashkh.com/" target="_blank"><i class="bi bi-balloon-heart-fill"></i></a>
                    </li>

                </ul>
                <span>Designed and written by Arashkh with <a href="https://reactjs.org/">React</a></span>
            </footer>
        </main>
    )
}