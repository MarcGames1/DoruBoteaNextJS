const Form = ()=>{
    return(
        <>
        <div className="form-container" id="contact">
    <h1>Contact Rapid</h1>
    <form action="/pages/success.html" method="post">
        <label htmlFor="nume">Nume</label>

        <input required type="text" id="nume" name="nume" placeholder="Nume si Prenume"/>


        <label htmlFor="email">Email</label>
        <input required type="email" name="email" id="email" placeholder="Adresa de email"/>

        <label htmlFor="phone">Telefon</label>
        <input required type="tel" name="phone" id="phone" pattern="[0-9]{10}" placeholder="Telefon"/>






        <textarea required name="comments" id="comments" rows="10" placeholder="Descrieti Cauza"></textarea>
        <fieldset>
            <label id="gdpr-label" htmlFor="gdpr"><a href="/pages/gdpr.html">Sunt de acord cu politica de prelucrare
                    a datelor</a></label>
            <input required type="checkbox" name="gdpr"/>
        </fieldset>
        <button className="btn from-right" type="submit">Trimiteti!</button>
    </form>
</div>
</>
    )
}

export default Form