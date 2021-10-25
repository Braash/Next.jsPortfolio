import Layout from './index' //Import Layout
import Link from 'next/link' //Import Link(allows us to create links between pages)

const Contact = props => (
    <Layout>
      <p className='header'><b>CONTACT INFORMATION | Email: ashby.brandon93@gmail.com</b></p> 
      <div>
        <Link href="https://github.com/Braash">
            <a target="_blank">Github</a> 
        </Link>
      </div >
      <div>
        <Link href="https://www.linkedin.com/in/brandon-ashby-923711107/">
            <a target="_blank">LinkedIn</a>
        </Link>
      </div>
      <style jsx>{`
            .aStyle {
                text-decoration: none;
                font-family: 'Arial';
                color: black;
                margin-top: 1px;
            },
            a{
                color: black;
                text-decoration: none;
                font-size: 0.9em;
            },
            .header {
                margin-top: 9px;
                padding: none;
                font-size: 0.9em;
                position: none;
            }
        `}</style>
    </Layout>
)

/*svg {
    position: relative;
    bottom: -0.5vh;
},*/
  
  export default Contact