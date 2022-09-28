import React from "react";
import './App.css'
import NumDisplay from './numberDisplay'
import LetterDisplay from './letterDis'

export default function App(){
    // const Yekan =  ['صفر', 'یک', 'دو', 'سه', 'چهار', 'پنچ', 'شش', 'هفت', 'هشت', 'نه']
    // const dahHa =  ['یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده']
    // const Dahgan = ['ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود']
    // const Sadgan = ['صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد']
    // const zeros =  ['','هزار', 'میلیون', 'میلیار', 'بیلیون', 'بیلیارد', 'تریلیون', 'تریلیارد']

    const numBook = [
         ['','هزار', 'میلیون', 'میلیار', 'بیلیون', 'بیلیارد', 'تریلیون', 'تریلیارد'],
         ['', 'یک', 'دو', 'سه', 'چهار', 'پنچ', 'شش', 'هفت', 'هشت', 'نه'],
         ['ده','یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'],
         ['','ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
         ['','صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد']
    ]

    function Copybtn(){

        navigator.clipboard.writeText(document.getElementById('text').value);

    }

    const [num,setNum] = React.useState()
    const [letter , setLetter] = React.useState()


    
    function GotNum(e) {

        let inp = String(e.target.value)
        let inpL = inp.length
        let mod = (inpL%3)
        // let inpRev = ''
        let tDinp = []

        let pubLet = ''

        for(let i = 0 ; i<(Math.ceil(inpL/3)) ; i++){
            tDinp.push([])
        }

        let temp = inpL-1
        for(let i = tDinp.length-1; i>=0 ; i--){
            for(let j = 2; j>=0; j--){
                if(temp >= 0){
                    tDinp[i][j] = inp[temp]
                }
                temp--
            }
        }

        let pubNum = []

        let byThree = tDinp.length
        tDinp.map((element,index)=>{
            pubNum.push('')
            element.map((elementt,indexx)=>{
                if(elementt!=null && elementt!=''){
                    pubNum[index] += (elementt)
                }
                //-----------
                if(indexx==0 && elementt!=(null)){
                    if(index!=0 && elementt!=0){
                        pubLet += 'و '
                    }
                    pubLet += numBook[4][elementt] + ' '
                    
                }else
                if(indexx==1 && elementt!=null){
                    if(elementt != 1){
                        if(element[indexx-1]!=null && elementt!=0){
                            pubLet += 'و '
                        }
                        pubLet += numBook[3][elementt] + ' '
                    }
                }else
                if((indexx==2 && elementt!=null) && (element[0]!=0 || element[1]!=0 || element[2]!=0)){

                    if(element[1]!=1 ){
                        if(element[indexx-1]!=null && elementt!=0){
                            pubLet += 'و '
                        }
                        pubLet += numBook[1][elementt] + ' ' + numBook[0][byThree-1] + ' '
                    }else{
                        if(element[indexx-1]!=null && elementt!=0 && (index != 0 || element[0]!=null) ){
                            pubLet += 'و '
                        }
                        pubLet += numBook[2][elementt] + ' ' + numBook[0][byThree-1] + ' '
                    }
                }

            })
            byThree--
        })

        pubLet = pubLet.replace(/ +(?= )/g,'');
        // console.log(tDinp)
        setNum(String(pubNum))
        setLetter(pubLet)

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
                    <LetterDisplay prop={letter}></LetterDisplay>
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