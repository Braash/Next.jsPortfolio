import Layout from './index' //Import Layout

export default () => (
    <Layout className='aStyle'>
       <p className='fontSize'>
           Intermediate/Junior Front-end developer who is comfortable working with Javascript, React 
           and HTML/CSS. I'm passionate about creativity and building unique UI applications and have realized 
           its importance in the web environment. I enjoy working collaborotively and can also navigate my way through individual projects.
        </p>
        <style jsx>{`
            .aStyle{
                text-decoration: "none";
                font-family: 'Arial';
                color: black;
                margin-bottom: 5px;
            }
            .fontSize{
                color: black;
                text-decoration: "none";
                font-size: 0.8em;
            }
        `}</style>
    </Layout>
)

