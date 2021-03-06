import { Alert } from "react-bootstrap"
import Info from "../svgComponents/info"

const Text =()=>{
    return(
        <main className="description content">
    <main>
        <h4 className="section-head">AVOCAT DORU BOTEA</h4>
        <h5 className="section-head">CONSULTANTA JURIDICA ONLINE!</h5>
        <h6 className="section-head">APROAPE DE DUMNEAVOASTRA ORIUNDE ATI FI!</h6>
        <br />
    </main>

    <main className="paragraphs">
<Alert variant="light" className="text-dark">

        <p ><Info/> Cabinet Avocat Doru Botea vine în întâmpinarea nevoilor clienţilor, prin asigurarea de servicii de
            consultanţă juridică online.</p>
        
</Alert>
<Alert variant="light" className="text-dark">
        <p> <Info/> Acest tip de servicii de consultanţă asigură o rezolvare facilă şi rapidă pentru anumite probleme
            juridice
            şi oferă o serie de avantaje cum ar fi evitarea deplasării cu rezultatul firesc al economiei de
            timp,
            costuri mai scăzute şi nu în ultimul rând, având în vedere contextul social, păstrarea unei
            distanţări
            sociale.</p>
</Alert>
<Alert variant="light" className="text-dark">
        <p> <Info/> Societatea în care trăim se află într-o continuă evoluţie, iar în prezent aşa numitul proces de
            digitalizare, cuprinde tot mai multe sectoare ale vieţii economico sociale şi asigură o paletă din
            ce în ce
            mai largă de servicii.</p>
</Alert>
    </main>
</main>

    )
}
export default Text