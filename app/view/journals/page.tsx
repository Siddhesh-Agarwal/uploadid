import { DataTable } from "@/components/ui/data-table";
import { Journal, columns } from "./columns";

const journals: Journal[] = [
    {
        "publisher": "Sage",
        "nameOfJournal": "Kassulke LLC",
        "dateOfPublication": "9/1/2006",
        "facultyIds": "1",
        "journalLink": "https://goo.ne.jp/sed.aspx?parturient=sapien&montes=in&nascetur=sapien&ridiculus=iaculis&mus=congue&etiam=vivamus&vel=metus&augue=arcu&vestibulum=adipiscing&rutrum=molestie&rutrum=hendrerit&neque=at&aenean=vulputate&auctor=vitae&gravida=nisl&sem=aenean&praesent=lectus&id=pellentesque&massa=eget&id=nunc&nisl=donec&venenatis=quis&lacinia=orci&aenean=eget&sit=orci&amet=vehicula&justo=condimentum&morbi=curabitur&ut=in&odio=libero&cras=ut&mi=massa&pede=volutpat&malesuada=convallis&in=morbi&imperdiet=odio&et=odio&commodo=elementum&vulputate=eu&justo=interdum&in=eu&blandit=tincidunt&ultrices=in&enim=leo&lorem=maecenas&ipsum=pulvinar&dolor=lobortis&sit=est&amet=phasellus&consectetuer=sit&adipiscing=amet&elit=erat&proin=nulla&interdum=tempus&mauris=vivamus&non=in&ligula=felis&pellentesque=eu&ultrices=sapien&phasellus=cursus&id=vestibulum&sapien=proin&in=eu&sapien=mi&iaculis=nulla&congue=ac&vivamus=enim&metus=in&arcu=tempor&adipiscing=turpis&molestie=nec&hendrerit=euismod&at=scelerisque&vulputate=quam&vitae=turpis&nisl=adipiscing&aenean=lorem&lectus=vitae&pellentesque=mattis&eget=nibh&nunc=ligula&donec=nec&quis=sem&orci=duis&eget=aliquam&orci=convallis&vehicula=nunc",
        "paperLink": "",
    },
    {
        "publisher": "Brainbox",
        "nameOfJournal": "Collins Inc",
        "dateOfPublication": "11/13/2005",
        "facultyIds": "2",
        "journalLink": "https://about.me/scelerisque/mauris/sit/amet/eros/suspendisse/accumsan.aspx?nulla=nam&ut=nulla&erat=integer&id=pede&mauris=justo&vulputate=lacinia&elementum=eget&nullam=tincidunt&varius=eget&nulla=tempus&facilisi=vel&cras=pede&non=morbi&velit=porttitor&nec=lorem&nisi=id&vulputate=ligula&nonummy=suspendisse&maecenas=ornare&tincidunt=consequat&lacus=lectus&at=in&velit=est&vivamus=risus&vel=auctor&nulla=sed&eget=tristique&eros=in&elementum=tempus&pellentesque=sit&quisque=amet&porta=sem&volutpat=fusce&erat=consequat&quisque=nulla&erat=nisl&eros=nunc&viverra=nisl&eget=duis&congue=bibendum&eget=felis&semper=sed&rutrum=interdum&nulla=venenatis&nunc=turpis&purus=enim&phasellus=blandit&in=mi&felis=in&donec=porttitor&semper=pede&sapien=justo&a=eu&libero=massa&nam=donec&dui=dapibus&proin=duis&leo=at&odio=velit&porttitor=eu&id=est&consequat=congue",
        "paperLink": ""
    },
    {
        "publisher": "IOP Publishing",
        "nameOfJournal": "Grimes-O'Reilly",
        "dateOfPublication": "10/12/2013",
        "facultyIds": "3",
        "journalLink": "https://seattletimes.com/aliquet/pulvinar/sed/nisl/nunc.jsp?vitae=ac&mattis=diam&nibh=cras&ligula=pellentesque&nec=volutpat&sem=dui&duis=maecenas&aliquam=tristique&convallis=est&nunc=et&proin=tempus&at=semper&turpis=est&a=quam&pede=pharetra&posuere=magna&nonummy=ac&integer=consequat&non=metus&velit=sapien&donec=ut&diam=nunc&neque=vestibulum&vestibulum=ante&eget=ipsum&vulputate=primis&ut=in&ultrices=faucibus&vel=orci&augue=luctus&vestibulum=et&ante=ultrices&ipsum=posuere&primis=cubilia&in=curae&faucibus=mauris&orci=viverra&luctus=diam&et=vitae&ultrices=quam&posuere=suspendisse&cubilia=potenti&curae=nullam&donec=porttitor&pharetra=lacus&magna=at&vestibulum=turpis&aliquet=donec&ultrices=posuere&erat=metus&tortor=vitae&sollicitudin=ipsum&mi=aliquam&sit=non&amet=mauris&lobortis=morbi&sapien=non&sapien=lectus&non=aliquam&mi=sit&integer=amet&ac=diam&neque=in&duis=magna&bibendum=bibendum&morbi=imperdiet&non=nullam&quam=orci&nec=pede&dui=venenatis&luctus=non&rutrum=sodales&nulla=sed&tellus=tincidunt&in=eu&sagittis=felis&dui=fusce&vel=posuere&nisl=felis&duis=sed&ac=lacus&nibh=morbi&fusce=sem&lacus=mauris&purus=laoreet&aliquet=ut&at=rhoncus&feugiat=aliquet&non=pulvinar&pretium=sed&quis=nisl&lectus=nunc&suspendisse=rhoncus&potenti=dui&in=vel",
        "paperLink": ""
    },
    {
        "publisher": "Sage",
        "nameOfJournal": "Gleichner Group",
        "dateOfPublication": "4/10/2000",
        "facultyIds": "4",
        "journalLink": "https://ehow.com/vivamus.jsp?odio=vehicula&condimentum=condimentum&id=curabitur&luctus=in&nec=libero&molestie=ut&sed=massa&justo=volutpat&pellentesque=convallis&viverra=morbi&pede=odio&ac=odio&diam=elementum&cras=eu&pellentesque=interdum&volutpat=eu&dui=tincidunt&maecenas=in&tristique=leo&est=maecenas&et=pulvinar&tempus=lobortis&semper=est&est=phasellus&quam=sit&pharetra=amet&magna=erat&ac=nulla&consequat=tempus&metus=vivamus&sapien=in&ut=felis&nunc=eu&vestibulum=sapien&ante=cursus&ipsum=vestibulum&primis=proin&in=eu&faucibus=mi&orci=nulla&luctus=ac&et=enim&ultrices=in&posuere=tempor&cubilia=turpis&curae=nec&mauris=euismod&viverra=scelerisque&diam=quam&vitae=turpis&quam=adipiscing&suspendisse=lorem&potenti=vitae&nullam=mattis&porttitor=nibh&lacus=ligula&at=nec&turpis=sem&donec=duis&posuere=aliquam&metus=convallis&vitae=nunc&ipsum=proin&aliquam=at&non=turpis&mauris=a&morbi=pede&non=posuere&lectus=nonummy&aliquam=integer&sit=non&amet=velit&diam=donec&in=diam&magna=neque&bibendum=vestibulum&imperdiet=eget&nullam=vulputate&orci=ut&pede=ultrices&venenatis=vel&non=augue&sodales=vestibulum",
        "paperLink": "",
    },
    {
        "publisher": "Springer",
        "nameOfJournal": "Raynor-Gerhold",
        "dateOfPublication": "6/24/2020",
        "facultyIds": "5",
        "journalLink": "https://latimes.com/risus/semper/porta/volutpat/quam/pede/lobortis.json?vulputate=eget&luctus=elit&cum=sodales&sociis=scelerisque&natoque=mauris&penatibus=sit&et=amet&magnis=eros&dis=suspendisse&parturient=accumsan&montes=tortor&nascetur=quis&ridiculus=turpis&mus=sed&vivamus=ante&vestibulum=vivamus&sagittis=tortor&sapien=duis&cum=mattis&sociis=egestas&natoque=metus&penatibus=aenean&et=fermentum",
        "paperLink": "",
    },
    {
        "publisher": "Sage",
        "nameOfJournal": "Nikolaus, Blick and Dicki",
        "dateOfPublication": "6/6/2014",
        "facultyIds": "6",
        "journalLink": "http://youku.com/ligula.jsp?ultrices=eleifend&enim=donec&lorem=ut&ipsum=dolor&dolor=morbi&sit=vel&amet=lectus&consectetuer=in&adipiscing=quam&elit=fringilla&proin=rhoncus&interdum=mauris&mauris=enim&non=leo&ligula=rhoncus&pellentesque=sed&ultrices=vestibulum&phasellus=sit&id=amet&sapien=cursus&in=id&sapien=turpis&iaculis=integer&congue=aliquet&vivamus=massa&metus=id&arcu=lobortis&adipiscing=convallis&molestie=tortor&hendrerit=risus&at=dapibus&vulputate=augue&vitae=vel&nisl=accumsan&aenean=tellus&lectus=nisi&pellentesque=eu&eget=orci&nunc=mauris&donec=lacinia&quis=sapien&orci=quis&eget=libero&orci=nullam&vehicula=sit&condimentum=amet&curabitur=turpis&in=elementum&libero=ligula&ut=vehicula&massa=consequat&volutpat=morbi&convallis=a&morbi=ipsum&odio=integer&odio=a&elementum=nibh&eu=in&interdum=quis&eu=justo&tincidunt=maecenas&in=rhoncus&leo=aliquam",
        "paperLink": "",
    },
    {
        "publisher": "Allen Press",
        "nameOfJournal": "Weissnat, Homenick and Kunde",
        "dateOfPublication": "6/3/2012",
        "facultyIds": "7",
        "journalLink": "https://barnesandnoble.com/molestie/hendrerit/at.json?a=hac&odio=habitasse&in=platea&hac=dictumst&habitasse=aliquam&platea=augue&dictumst=quam&maecenas=sollicitudin&ut=vitae&massa=consectetuer&quis=eget&augue=rutrum&luctus=at&tincidunt=lorem&nulla=integer&mollis=tincidunt&molestie=ante&lorem=vel&quisque=ipsum&ut=praesent&erat=blandit&curabitur=lacinia&gravida=erat&nisi=vestibulum&at=sed&nibh=magna&in=at&hac=nunc&habitasse=commodo&platea=placerat&dictumst=praesent&aliquam=blandit&augue=nam&quam=nulla&sollicitudin=integer&vitae=pede&consectetuer=justo&eget=lacinia&rutrum=eget&at=tincidunt&lorem=eget&integer=tempus&tincidunt=vel&ante=pede&vel=morbi&ipsum=porttitor&praesent=lorem&blandit=id&lacinia=ligula&erat=suspendisse&vestibulum=ornare&sed=consequat&magna=lectus&at=in&nunc=est&commodo=risus&placerat=auctor&praesent=sed&blandit=tristique&nam=in&nulla=tempus&integer=sit&pede=amet&justo=sem&lacinia=fusce&eget=consequat&tincidunt=nulla&eget=nisl&tempus=nunc&vel=nisl&pede=duis&morbi=bibendum&porttitor=felis&lorem=sed&id=interdum&ligula=venenatis&suspendisse=turpis&ornare=enim&consequat=blandit&lectus=mi",
        "paperLink": "",
    },
    {
        "publisher": "Springer",
        "nameOfJournal": "Halvorson, Reinger and Boehm",
        "dateOfPublication": "4/15/2012",
        "facultyIds": "8",
        "journalLink": "http://pen.io/quis/augue.xml?in=aliquet&sapien=ultrices&iaculis=erat&congue=tortor&vivamus=sollicitudin&metus=mi&arcu=sit&adipiscing=amet&molestie=lobortis&hendrerit=sapien&at=sapien&vulputate=non&vitae=mi&nisl=integer&aenean=ac&lectus=neque&pellentesque=duis&eget=bibendum&nunc=morbi&donec=non&quis=quam&orci=nec&eget=dui&orci=luctus&vehicula=rutrum&condimentum=nulla&curabitur=tellus&in=in&libero=sagittis&ut=dui&massa=vel&volutpat=nisl&convallis=duis&morbi=ac&odio=nibh&odio=fusce&elementum=lacus&eu=purus&interdum=aliquet&eu=at&tincidunt=feugiat&in=non&leo=pretium&maecenas=quis&pulvinar=lectus&lobortis=suspendisse&est=potenti&phasellus=in&sit=eleifend&amet=quam&erat=a&nulla=odio&tempus=in&vivamus=hac&in=habitasse&felis=platea&eu=dictumst&sapien=maecenas&cursus=ut&vestibulum=massa&proin=quis&eu=augue&mi=luctus&nulla=tincidunt&ac=nulla&enim=mollis&in=molestie&tempor=lorem",
        "paperLink": "",
    },
    {
        "publisher": "Wiley",
        "nameOfJournal": "Bode, Huel and Williamson",
        "dateOfPublication": "5/7/2021",
        "facultyIds": "9",
        "journalLink": "http://cdbaby.com/habitasse.html?habitasse=mauris&platea=sit&dictumst=amet&aliquam=eros&augue=suspendisse&quam=accumsan&sollicitudin=tortor&vitae=quis&consectetuer=turpis&eget=sed&rutrum=ante&at=vivamus&lorem=tortor&integer=duis&tincidunt=mattis&ante=egestas&vel=metus&ipsum=aenean&praesent=fermentum&blandit=donec&lacinia=ut&erat=mauris&vestibulum=eget&sed=massa&magna=tempor&at=convallis&nunc=nulla&commodo=neque&placerat=libero&praesent=convallis&blandit=eget&nam=eleifend&nulla=luctus&integer=ultricies&pede=eu&justo=nibh&lacinia=quisque&eget=id&tincidunt=justo&eget=sit&tempus=amet&vel=sapien&pede=dignissim&morbi=vestibulum&porttitor=vestibulum&lorem=ante&id=ipsum&ligula=primis&suspendisse=in&ornare=faucibus&consequat=orci&lectus=luctus&in=et&est=ultrices&risus=posuere&auctor=cubilia&sed=curae&tristique=nulla&in=dapibus&tempus=dolor&sit=vel&amet=est&sem=donec&fusce=odio&consequat=justo&nulla=sollicitudin&nisl=ut&nunc=suscipit&nisl=a&duis=feugiat&bibendum=et&felis=eros&sed=vestibulum&interdum=ac&venenatis=est&turpis=lacinia&enim=nisi&blandit=venenatis&mi=tristique&in=fusce&porttitor=congue&pede=diam&justo=id&eu=ornare&massa=imperdiet&donec=sapien&dapibus=urna&duis=pretium&at=nisl&velit=ut&eu=volutpat&est=sapien&congue=arcu&elementum=sed&in=augue&hac=aliquam&habitasse=erat&platea=volutpat&dictumst=in",
        "paperLink": "",
    },
    {
        "publisher": "Wiley",
        "nameOfJournal": "Feil-Cole",
        "dateOfPublication": "11/22/2014",
        "facultyIds": "10",
        "journalLink": "https://nytimes.com/tempus/sit/amet/sem.aspx?blandit=sed&mi=tincidunt&in=eu&porttitor=felis&pede=fusce&justo=posuere&eu=felis&massa=sed&donec=lacus&dapibus=morbi&duis=sem&at=mauris&velit=laoreet&eu=ut&est=rhoncus&congue=aliquet&elementum=pulvinar&in=sed&hac=nisl&habitasse=nunc&platea=rhoncus&dictumst=dui&morbi=vel&vestibulum=sem&velit=sed&id=sagittis&pretium=nam&iaculis=congue&diam=risus&erat=semper&fermentum=porta&justo=volutpat&nec=quam&condimentum=pede&neque=lobortis&sapien=ligula&placerat=sit&ante=amet&nulla=eleifend&justo=pede&aliquam=libero&quis=quis&turpis=orci&eget=nullam&elit=molestie&sodales=nibh&scelerisque=in&mauris=lectus&sit=pellentesque&amet=at&eros=nulla&suspendisse=suspendisse&accumsan=potenti&tortor=cras&quis=in&turpis=purus&sed=eu&ante=magna&vivamus=vulputate&tortor=luctus&duis=cum&mattis=sociis&egestas=natoque&metus=penatibus&aenean=et&fermentum=magnis&donec=dis&ut=parturient",
        "paperLink": "",
    },
    {
        "publisher": "Oxford Academics",
        "nameOfJournal": "Wisozk LLC",
        "dateOfPublication": "6/27/2007",
        "facultyIds": "11",
        "journalLink": "https://list-manage.com/posuere.json?consequat=enim&morbi=blandit&a=mi&ipsum=in&integer=porttitor&a=pede&nibh=justo&in=eu&quis=massa&justo=donec&maecenas=dapibus&rhoncus=duis&aliquam=at&lacus=velit&morbi=eu&quis=est&tortor=congue&id=elementum&nulla=in&ultrices=hac&aliquet=habitasse&maecenas=platea&leo=dictumst&odio=morbi&condimentum=vestibulum&id=velit&luctus=id&nec=pretium&molestie=iaculis&sed=diam&justo=erat&pellentesque=fermentum&viverra=justo&pede=nec&ac=condimentum&diam=neque&cras=sapien&pellentesque=placerat&volutpat=ante&dui=nulla&maecenas=justo&tristique=aliquam&est=quis&et=turpis&tempus=eget&semper=elit&est=sodales&quam=scelerisque&pharetra=mauris&magna=sit&ac=amet&consequat=eros&metus=suspendisse&sapien=accumsan&ut=tortor&nunc=quis&vestibulum=turpis&ante=sed&ipsum=ante&primis=vivamus",
        "paperLink": "",
    },
    {
        "publisher": "Wiley",
        "nameOfJournal": "Jast-Wintheiser",
        "dateOfPublication": "8/1/2016",
        "facultyIds": "12",
        "journalLink": "https://mapy.cz/sapien/varius/ut/blandit/non/interdum/in.json?porta=amet&volutpat=sem&quam=fusce&pede=consequat&lobortis=nulla&ligula=nisl&sit=nunc&amet=nisl&eleifend=duis&pede=bibendum&libero=felis&quis=sed&orci=interdum&nullam=venenatis&molestie=turpis&nibh=enim&in=blandit&lectus=mi&pellentesque=in&at=porttitor&nulla=pede&suspendisse=justo&potenti=eu&cras=massa&in=donec&purus=dapibus&eu=duis&magna=at&vulputate=velit&luctus=eu&cum=est&sociis=congue&natoque=elementum&penatibus=in&et=hac&magnis=habitasse&dis=platea&parturient=dictumst&montes=morbi&nascetur=vestibulum&ridiculus=velit&mus=id&vivamus=pretium&vestibulum=iaculis&sagittis=diam&sapien=erat&cum=fermentum&sociis=justo&natoque=nec&penatibus=condimentum&et=neque&magnis=sapien&dis=placerat&parturient=ante&montes=nulla",
        "paperLink": "",
    },
    {
        "publisher": "ACS Publications",
        "nameOfJournal": "Muller-McDermott",
        "dateOfPublication": "4/6/2010",
        "facultyIds": "13",
        "journalLink": "https://google.com/augue/quam/sollicitudin/vitae/consectetuer/eget.json?molestie=sem&lorem=sed&quisque=sagittis",
        "paperLink": "",
    },
    {
        "publisher": "Springer",
        "nameOfJournal": "Kshlerin LLC",
        "dateOfPublication": "3/6/2008",
        "facultyIds": "14",
        "journalLink": "https://nba.com/elit/proin/interdum/mauris.aspx?montes=sed&nascetur=magna&ridiculus=at&mus=nunc&vivamus=commodo&vestibulum=placerat&sagittis=praesent&sapien=blandit&cum=nam&sociis=nulla&natoque=integer&penatibus=pede&et=justo&magnis=lacinia&dis=eget&parturient=tincidunt&montes=eget&nascetur=tempus&ridiculus=vel&mus=pede&etiam=morbi&vel=porttitor&augue=lorem&vestibulum=id&rutrum=ligula&rutrum=suspendisse&neque=ornare&aenean=consequat&auctor=lectus&gravida=in&sem=est&praesent=risus&id=auctor&massa=sed&id=tristique&nisl=in&venenatis=tempus&lacinia=sit&aenean=amet&sit=sem&amet=fusce&justo=consequat&morbi=nulla&ut=nisl&odio=nunc&cras=nisl&mi=duis&pede=bibendum&malesuada=felis&in=sed&imperdiet=interdum&et=venenatis&commodo=turpis&vulputate=enim&justo=blandit",
        "paperLink": "",
    },
    {
        "publisher": "Elsevier",
        "nameOfJournal": "Jacobs Inc",
        "dateOfPublication": "5/3/2001",
        "facultyIds": "15",
        "journalLink": "https://gov.uk/vestibulum/vestibulum.aspx?ante=vel&ipsum=lectus&primis=in&in=quam&faucibus=fringilla&orci=rhoncus&luctus=mauris&et=enim&ultrices=leo&posuere=rhoncus&cubilia=sed&curae=vestibulum&duis=sit&faucibus=amet&accumsan=cursus&odio=id&curabitur=turpis&convallis=integer&duis=aliquet&consequat=massa&dui=id&nec=lobortis&nisi=convallis&volutpat=tortor&eleifend=risus&donec=dapibus&ut=augue&dolor=vel&morbi=accumsan&vel=tellus&lectus=nisi&in=eu&quam=orci&fringilla=mauris&rhoncus=lacinia&mauris=sapien&enim=quis&leo=libero&rhoncus=nullam&sed=sit&vestibulum=amet&sit=turpis&amet=elementum&cursus=ligula&id=vehicula&turpis=consequat&integer=morbi&aliquet=a&massa=ipsum&id=integer&lobortis=a&convallis=nibh&tortor=in&risus=quis&dapibus=justo&augue=maecenas&vel=rhoncus&accumsan=aliquam&tellus=lacus&nisi=morbi&eu=quis&orci=tortor&mauris=id&lacinia=nulla&sapien=ultrices&quis=aliquet&libero=maecenas&nullam=leo&sit=odio&amet=condimentum&turpis=id&elementum=luctus&ligula=nec&vehicula=molestie&consequat=sed&morbi=justo&a=pellentesque&ipsum=viverra&integer=pede&a=ac&nibh=diam&in=cras&quis=pellentesque&justo=volutpat&maecenas=dui",
        "paperLink": "",
    },
    {
        "publisher": "Springer",
        "nameOfJournal": "Aufderhar, Kreiger and Aufderhar",
        "dateOfPublication": "7/26/2021",
        "facultyIds": "16",
        "journalLink": "https://free.fr/vivamus/in.png?lectus=vivamus&in=tortor&est=duis&risus=mattis&auctor=egestas&sed=metus&tristique=aenean&in=fermentum&tempus=donec&sit=ut&amet=mauris&sem=eget&fusce=massa&consequat=tempor&nulla=convallis&nisl=nulla&nunc=neque&nisl=libero&duis=convallis&bibendum=eget&felis=eleifend&sed=luctus&interdum=ultricies&venenatis=eu&turpis=nibh&enim=quisque&blandit=id&mi=justo&in=sit&porttitor=amet&pede=sapien&justo=dignissim&eu=vestibulum&massa=vestibulum&donec=ante&dapibus=ipsum&duis=primis&at=in&velit=faucibus&eu=orci&est=luctus&congue=et&elementum=ultrices&in=posuere&hac=cubilia&habitasse=curae&platea=nulla&dictumst=dapibus&morbi=dolor&vestibulum=vel&velit=est&id=donec&pretium=odio&iaculis=justo&diam=sollicitudin&erat=ut&fermentum=suscipit&justo=a&nec=feugiat&condimentum=et&neque=eros&sapien=vestibulum&placerat=ac&ante=est&nulla=lacinia&justo=nisi&aliquam=venenatis&quis=tristique&turpis=fusce&eget=congue&elit=diam",
        "paperLink": "",
    },
    {
        "publisher": "BioMed Central",
        "nameOfJournal": "Walker Group",
        "dateOfPublication": "3/23/2001",
        "facultyIds": "17",
        "journalLink": "https://aol.com/morbi/sem/mauris/laoreet/ut/rhoncus/aliquet.js?maecenas=proin&tincidunt=risus&lacus=praesent&at=lectus&velit=vestibulum&vivamus=quam&vel=sapien&nulla=varius&eget=ut&eros=blandit&elementum=non&pellentesque=interdum&quisque=in&porta=ante&volutpat=vestibulum&erat=ante&quisque=ipsum&erat=primis&eros=in&viverra=faucibus&eget=orci&congue=luctus&eget=et&semper=ultrices&rutrum=posuere&nulla=cubilia&nunc=curae&purus=duis&phasellus=faucibus&in=accumsan&felis=odio&donec=curabitur&semper=convallis&sapien=duis&a=consequat",
        "paperLink": "",
    },
    {
        "publisher": "ACS Publications",
        "nameOfJournal": "Gleichner-O'Hara",
        "dateOfPublication": "11/9/2012",
        "facultyIds": "18",
        "journalLink": "https://google.com.hk/a/odio/in/hac/habitasse.html?eget=volutpat&vulputate=quam&ut=pede&ultrices=lobortis&vel=ligula&augue=sit&vestibulum=amet&ante=eleifend&ipsum=pede&primis=libero&in=quis&faucibus=orci&orci=nullam&luctus=molestie&et=nibh&ultrices=in&posuere=lectus&cubilia=pellentesque&curae=at&donec=nulla&pharetra=suspendisse&magna=potenti&vestibulum=cras&aliquet=in&ultrices=purus&erat=eu&tortor=magna&sollicitudin=vulputate&mi=luctus&sit=cum&amet=sociis&lobortis=natoque&sapien=penatibus&sapien=et&non=magnis&mi=dis&integer=parturient&ac=montes&neque=nascetur&duis=ridiculus&bibendum=mus&morbi=vivamus&non=vestibulum&quam=sagittis&nec=sapien&dui=cum&luctus=sociis&rutrum=natoque",
        "paperLink": ""
    },
    {
        "publisher": "Emerald Group Publishing",
        "nameOfJournal": "Rosenbaum and Sons",
        "dateOfPublication": "11/1/2003",
        "facultyIds": "19",
        "journalLink": "http://yale.edu/suspendisse/accumsan.png?tincidunt=pharetra&in=magna&leo=ac&maecenas=consequat&pulvinar=metus&lobortis=sapien&est=ut&phasellus=nunc&sit=vestibulum&amet=ante&erat=ipsum&nulla=primis&tempus=in&vivamus=faucibus&in=orci&felis=luctus&eu=et&sapien=ultrices&cursus=posuere&vestibulum=cubilia&proin=curae&eu=mauris&mi=viverra&nulla=diam&ac=vitae&enim=quam&in=suspendisse&tempor=potenti&turpis=nullam&nec=porttitor&euismod=lacus&scelerisque=at&quam=turpis&turpis=donec&adipiscing=posuere&lorem=metus&vitae=vitae&mattis=ipsum&nibh=aliquam&ligula=non&nec=mauris&sem=morbi&duis=non&aliquam=lectus&convallis=aliquam&nunc=sit&proin=amet&at=diam&turpis=in&a=magna&pede=bibendum&posuere=imperdiet&nonummy=nullam&integer=orci&non=pede&velit=venenatis&donec=non&diam=sodales&neque=sed&vestibulum=tincidunt&eget=eu&vulputate=felis&ut=fusce&ultrices=posuere&vel=felis&augue=sed&vestibulum=lacus&ante=morbi&ipsum=sem&primis=mauris&in=laoreet&faucibus=ut&orci=rhoncus&luctus=aliquet&et=pulvinar&ultrices=sed&posuere=nisl&cubilia=nunc&curae=rhoncus&donec=dui&pharetra=vel&magna=sem&vestibulum=sed&aliquet=sagittis&ultrices=nam&erat=congue&tortor=risus&sollicitudin=semper&mi=porta&sit=volutpat",
        "paperLink": ""
    },
    {
        "publisher": "Elsevier",
        "nameOfJournal": "Cummings, Gerlach and Okuneva",
        "dateOfPublication": "10/20/2022",
        "facultyIds": "20",
        "journalLink": "http://google.co.uk/auctor/gravida/sem/praesent/id.json?felis=quam&sed=nec&lacus=dui&morbi=luctus&sem=rutrum&mauris=nulla&laoreet=tellus&ut=in&rhoncus=sagittis&aliquet=dui&pulvinar=vel&sed=nisl&nisl=duis&nunc=ac&rhoncus=nibh&dui=fusce&vel=lacus&sem=purus&sed=aliquet&sagittis=at&nam=feugiat&congue=non&risus=pretium&semper=quis&porta=lectus&volutpat=suspendisse&quam=potenti&pede=in&lobortis=eleifend&ligula=quam&sit=a&amet=odio&eleifend=in&pede=hac&libero=habitasse&quis=platea&orci=dictumst&nullam=maecenas&molestie=ut&nibh=massa&in=quis&lectus=augue&pellentesque=luctus&at=tincidunt&nulla=nulla&suspendisse=mollis&potenti=molestie&cras=lorem&in=quisque&purus=ut&eu=erat&magna=curabitur&vulputate=gravida&luctus=nisi&cum=at&sociis=nibh&natoque=in&penatibus=hac&et=habitasse&magnis=platea&dis=dictumst&parturient=aliquam&montes=augue&nascetur=quam&ridiculus=sollicitudin&mus=vitae&vivamus=consectetuer&vestibulum=eget&sagittis=rutrum&sapien=at&cum=lorem&sociis=integer&natoque=tincidunt&penatibus=ante&et=vel&magnis=ipsum&dis=praesent&parturient=blandit&montes=lacinia&nascetur=erat&ridiculus=vestibulum&mus=sed&etiam=magna&vel=at&augue=nunc&vestibulum=commodo&rutrum=placerat&rutrum=praesent&neque=blandit&aenean=nam&auctor=nulla&gravida=integer&sem=pede&praesent=justo",
        "paperLink": ""
    }
]

export default function JournalsPage() {
    return (
        <main className="w-full px-3 py-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                Journals
            </h1>
            <div className="container mx-auto py-10">
                <DataTable data={journals} columns={columns} />
            </div>
        </main>
    )
}
