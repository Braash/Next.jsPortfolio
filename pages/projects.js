import Layout from './index.js' //Import Layout
import Link from 'next/link' //Import Link(allows us to create links between pages)



const Contact = props => (
    <Layout>
       <img className="img1" src="./03.png" alt="Company Logo" />
       <div className="aStyle">
            <Link  href="https://github.com/Braash">
                <a className='anchor' target="_blank">Github</a>
            </Link>
       </div>
    
       <div className="aStyle">
            <Link href="http://brale.herokuapp.com/MemGame">
                <a className='anchor' target="_blank"><b>BRALE MEMORY GAME</b> 
                </a>
            </Link>
       </div>
       <style jsx>{`
            .aStyle {
                text-decoration: none;
                font-family: 'Arial';
                color: black;
                font-size: 0.8em;
                margin-bottom: 4px;  
            }
            .anchor {
                color: black;
                text-decoration: none;
                margin-bottom: 4px;
            }
            .img1{
                height: 500px;
                width: auto;
                padding: 20px;
                margin-top:20px;
                margin-bottom:16px;
                background-color: black;
            }
        `}</style>
    </Layout>
  )
  
  export default Contact //Export Contact component