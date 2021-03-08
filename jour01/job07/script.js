function jourtravaille(date)
{
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    var jourferies = [
      '2020-01-01',
      '2020-04-13',
      '2020-05-01',
      '2020-05-08',
      '2020-05-21',
      '2020-06-01',
      '2020-07-14',
      '2020-08-15',
      '2020-11-01',
      '2020-11-11',
      '2020-12-25']

    var e = date;
    e = e.toISOString().split('T')[0];
    var d = date.toLocaleDateString('fr-FR', options);
    jour = d.split(" ")[0]  ;
    if(jourferies.includes(e))
    {
        console.log(d + " est un jour ferié");
    }
    else
    {
        console.log(d + " n'est pas un jour ferié");
    }


    if(jour == "samedi" | jour == "dimanche")
    {
        console.log("Non, " + d + " est un week-end")
    }
    else
    {
        console.log("Oui, " + d + " est un jour travaillé");
    }



}
saisie = prompt("Date : yyyy-mm-dd");
var date = new Date(saisie);
jourtravaille(date);