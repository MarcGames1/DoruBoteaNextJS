

function ConsoleMessage(){
    var styles = [
        'background: linear-gradient(#1e9854, #38c272)'
        , 'color: white'
        , 'display: block'
        , 'padding: 10px 30px'
        , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
        , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
        , 'line-height: 40px'
        , 'text-align: center'
        , 'font-weight: bold'
        , 'font-size: 16px'
    ].join(';');
    
    var styles2 = [
        'background: linear-gradient(#38c272, #1e9854)'
        , 'color: white'
        , 'display: block'
        , 'padding: 10px 30px'
        , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
        , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
        , 'line-height: 40px'
        , 'text-align: center'
        , 'font-weight: bold'
        , 'font-size: 16px'
    ].join(';');
    console.clear()
    console.log('%c Stim ca regulile sunt facute pentru a fi incalcate, te apreciem pentru asta.', styles);
    console.log('%c Daca Iti doresti si tu un site care sa fie performant si cat mai sus in motorul de cautare trimite-mi un mail pe adresa George.marcu20@gmail.com', styles2);
}

export default ConsoleMessage