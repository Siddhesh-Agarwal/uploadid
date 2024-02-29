import {
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    TableBody,
    Table
} from "@/components/ui/table"
import Link from "next/link"
import { FaLink } from "react-icons/fa6"

type Patent = {
    publisher: string;
    title: string;
    dateOfPublication: string;
    facultyIds: string;
    journalLink: string;
}

const patents: Patent[] = [
    { "publisher": "Brainverse", "title": "Attention is all you need", "dateOfPublication": "9/1/2006", "facultyIds": "1", "journalLink": "https://goo.ne.jp/sed.aspx?parturient=sapien&montes=in&nascetur=sapien&ridiculus=iaculis&mus=congue&etiam=vivamus&vel=metus&augue=arcu&vestibulum=adipiscing&rutrum=molestie&rutrum=hendrerit&neque=at&aenean=vulputate&auctor=vitae&gravida=nisl&sem=aenean&praesent=lectus&id=pellentesque&massa=eget&id=nunc&nisl=donec&venenatis=quis&lacinia=orci&aenean=eget&sit=orci&amet=vehicula&justo=condimentum&morbi=curabitur&ut=in&odio=libero&cras=ut&mi=massa&pede=volutpat&malesuada=convallis&in=morbi&imperdiet=odio&et=odio&commodo=elementum&vulputate=eu&justo=interdum&in=eu&blandit=tincidunt&ultrices=in&enim=leo&lorem=maecenas&ipsum=pulvinar&dolor=lobortis&sit=est&amet=phasellus&consectetuer=sit&adipiscing=amet&elit=erat&proin=nulla&interdum=tempus&mauris=vivamus&non=in&ligula=felis&pellentesque=eu&ultrices=sapien&phasellus=cursus&id=vestibulum&sapien=proin&in=eu&sapien=mi&iaculis=nulla&congue=ac&vivamus=enim&metus=in&arcu=tempor&adipiscing=turpis&molestie=nec&hendrerit=euismod&at=scelerisque&vulputate=quam&vitae=turpis&nisl=adipiscing&aenean=lorem&lectus=vitae&pellentesque=mattis&eget=nibh&nunc=ligula&donec=nec&quis=sem&orci=duis&eget=aliquam&orci=convallis&vehicula=nunc" },
    { "publisher": "Brainbox", "title": "1-bit LLMs", "dateOfPublication": "11/13/2005", "facultyIds": "2", "journalLink": "https://about.me/scelerisque/mauris/sit/amet/eros/suspendisse/accumsan.aspx?nulla=nam&ut=nulla&erat=integer&id=pede&mauris=justo&vulputate=lacinia&elementum=eget&nullam=tincidunt&varius=eget&nulla=tempus&facilisi=vel&cras=pede&non=morbi&velit=porttitor&nec=lorem&nisi=id&vulputate=ligula&nonummy=suspendisse&maecenas=ornare&tincidunt=consequat&lacus=lectus&at=in&velit=est&vivamus=risus&vel=auctor&nulla=sed&eget=tristique&eros=in&elementum=tempus&pellentesque=sit&quisque=amet&porta=sem&volutpat=fusce&erat=consequat&quisque=nulla&erat=nisl&eros=nunc&viverra=nisl&eget=duis&congue=bibendum&eget=felis&semper=sed&rutrum=interdum&nulla=venenatis&nunc=turpis&purus=enim&phasellus=blandit&in=mi&felis=in&donec=porttitor&semper=pede&sapien=justo&a=eu&libero=massa&nam=donec&dui=dapibus&proin=duis&leo=at&odio=velit&porttitor=eu&id=est&consequat=congue" },
    { "publisher": "Dynava", "title": "LSTMs vs RNNs for french-english translation", "dateOfPublication": "10/12/2013", "facultyIds": "3", "journalLink": "https://seattletimes.com/aliquet/pulvinar/sed/nisl/nunc.jsp?vitae=ac&mattis=diam&nibh=cras&ligula=pellentesque&nec=volutpat&sem=dui&duis=maecenas&aliquam=tristique&convallis=est&nunc=et&proin=tempus&at=semper&turpis=est&a=quam&pede=pharetra&posuere=magna&nonummy=ac&integer=consequat&non=metus&velit=sapien&donec=ut&diam=nunc&neque=vestibulum&vestibulum=ante&eget=ipsum&vulputate=primis&ut=in&ultrices=faucibus&vel=orci&augue=luctus&vestibulum=et&ante=ultrices&ipsum=posuere&primis=cubilia&in=curae&faucibus=mauris&orci=viverra&luctus=diam&et=vitae&ultrices=quam&posuere=suspendisse&cubilia=potenti&curae=nullam&donec=porttitor&pharetra=lacus&magna=at&vestibulum=turpis&aliquet=donec&ultrices=posuere&erat=metus&tortor=vitae&sollicitudin=ipsum&mi=aliquam&sit=non&amet=mauris&lobortis=morbi&sapien=non&sapien=lectus&non=aliquam&mi=sit&integer=amet&ac=diam&neque=in&duis=magna&bibendum=bibendum&morbi=imperdiet&non=nullam&quam=orci&nec=pede&dui=venenatis&luctus=non&rutrum=sodales&nulla=sed&tellus=tincidunt&in=eu&sagittis=felis&dui=fusce&vel=posuere&nisl=felis&duis=sed&ac=lacus&nibh=morbi&fusce=sem&lacus=mauris&purus=laoreet&aliquet=ut&at=rhoncus&feugiat=aliquet&non=pulvinar&pretium=sed&quis=nisl&lectus=nunc&suspendisse=rhoncus&potenti=dui&in=vel" },
    { "publisher": "Zoomzone", "title": "The Anatomy of a large-scale hypertextual search engine", "dateOfPublication": "4/10/2000", "facultyIds": "4", "journalLink": "https://ehow.com/vivamus.jsp?odio=vehicula&condimentum=condimentum&id=curabitur&luctus=in&nec=libero&molestie=ut&sed=massa&justo=volutpat&pellentesque=convallis&viverra=morbi&pede=odio&ac=odio&diam=elementum&cras=eu&pellentesque=interdum&volutpat=eu&dui=tincidunt&maecenas=in&tristique=leo&est=maecenas&et=pulvinar&tempus=lobortis&semper=est&est=phasellus&quam=sit&pharetra=amet&magna=erat&ac=nulla&consequat=tempus&metus=vivamus&sapien=in&ut=felis&nunc=eu&vestibulum=sapien&ante=cursus&ipsum=vestibulum&primis=proin&in=eu&faucibus=mi&orci=nulla&luctus=ac&et=enim&ultrices=in&posuere=tempor&cubilia=turpis&curae=nec&mauris=euismod&viverra=scelerisque&diam=quam&vitae=turpis&quam=adipiscing&suspendisse=lorem&potenti=vitae&nullam=mattis&porttitor=nibh&lacus=ligula&at=nec&turpis=sem&donec=duis&posuere=aliquam&metus=convallis&vitae=nunc&ipsum=proin&aliquam=at&non=turpis&mauris=a&morbi=pede&non=posuere&lectus=nonummy&aliquam=integer&sit=non&amet=velit&diam=donec&in=diam&magna=neque&bibendum=vestibulum&imperdiet=eget&nullam=vulputate&orci=ut&pede=ultrices&venenatis=vel&non=augue&sodales=vestibulum" },
    { "publisher": "Divanoodle", "title": "MapReduce : Simplified Data Processing on Large Clusters", "dateOfPublication": "6/24/2020", "facultyIds": "5", "journalLink": "https://latimes.com/risus/semper/porta/volutpat/quam/pede/lobortis.json?vulputate=eget&luctus=elit&cum=sodales&sociis=scelerisque&natoque=mauris&penatibus=sit&et=amet&magnis=eros&dis=suspendisse&parturient=accumsan&montes=tortor&nascetur=quis&ridiculus=turpis&mus=sed&vivamus=ante&vestibulum=vivamus&sagittis=tortor&sapien=duis&cum=mattis&sociis=egestas&natoque=metus&penatibus=aenean&et=fermentum" },
    { "publisher": "Dabvine", "title": "Distinctive Image Features from Scale-Invariant Keypoints", "dateOfPublication": "6/6/2014", "facultyIds": "6", "journalLink": "http://youku.com/ligula.jsp?ultrices=eleifend&enim=donec&lorem=ut&ipsum=dolor&dolor=morbi&sit=vel&amet=lectus&consectetuer=in&adipiscing=quam&elit=fringilla&proin=rhoncus&interdum=mauris&mauris=enim&non=leo&ligula=rhoncus&pellentesque=sed&ultrices=vestibulum&phasellus=sit&id=amet&sapien=cursus&in=id&sapien=turpis&iaculis=integer&congue=aliquet&vivamus=massa&metus=id&arcu=lobortis&adipiscing=convallis&molestie=tortor&hendrerit=risus&at=dapibus&vulputate=augue&vitae=vel&nisl=accumsan&aenean=tellus&lectus=nisi&pellentesque=eu&eget=orci&nunc=mauris&donec=lacinia&quis=sapien&orci=quis&eget=libero&orci=nullam&vehicula=sit&condimentum=amet&curabitur=turpis&in=elementum&libero=ligula&ut=vehicula&massa=consequat&volutpat=morbi&convallis=a&morbi=ipsum&odio=integer&odio=a&elementum=nibh&eu=in&interdum=quis&eu=justo&tincidunt=maecenas&in=rhoncus&leo=aliquam" },
    { "publisher": "Oyoloo", "title": "Reinforcement Learning: An Introduction", "dateOfPublication": "6/3/2012", "facultyIds": "7", "journalLink": "https://barnesandnoble.com/molestie/hendrerit/at.json?a=hac&odio=habitasse&in=platea&hac=dictumst&habitasse=aliquam&platea=augue&dictumst=quam&maecenas=sollicitudin&ut=vitae&massa=consectetuer&quis=eget&augue=rutrum&luctus=at&tincidunt=lorem&nulla=integer&mollis=tincidunt&molestie=ante&lorem=vel&quisque=ipsum&ut=praesent&erat=blandit&curabitur=lacinia&gravida=erat&nisi=vestibulum&at=sed&nibh=magna&in=at&hac=nunc&habitasse=commodo&platea=placerat&dictumst=praesent&aliquam=blandit&augue=nam&quam=nulla&sollicitudin=integer&vitae=pede&consectetuer=justo&eget=lacinia&rutrum=eget&at=tincidunt&lorem=eget&integer=tempus&tincidunt=vel&ante=pede&vel=morbi&ipsum=porttitor&praesent=lorem&blandit=id&lacinia=ligula&erat=suspendisse&vestibulum=ornare&sed=consequat&magna=lectus&at=in&nunc=est&commodo=risus&placerat=auctor&praesent=sed&blandit=tristique&nam=in&nulla=tempus&integer=sit&pede=amet&justo=sem&lacinia=fusce&eget=consequat&tincidunt=nulla&eget=nisl&tempus=nunc&vel=nisl&pede=duis&morbi=bibendum&porttitor=felis&lorem=sed&id=interdum&ligula=venenatis&suspendisse=turpis&ornare=enim&consequat=blandit&lectus=mi" },
    { "publisher": "Aimbo", "title": "Toward the next generation of recommender systems: a survey of the state-of-the-art and possible extensions", "dateOfPublication": "4/15/2012", "facultyIds": "8", "journalLink": "http://pen.io/quis/augue.xml?in=aliquet&sapien=ultrices&iaculis=erat&congue=tortor&vivamus=sollicitudin&metus=mi&arcu=sit&adipiscing=amet&molestie=lobortis&hendrerit=sapien&at=sapien&vulputate=non&vitae=mi&nisl=integer&aenean=ac&lectus=neque&pellentesque=duis&eget=bibendum&nunc=morbi&donec=non&quis=quam&orci=nec&eget=dui&orci=luctus&vehicula=rutrum&condimentum=nulla&curabitur=tellus&in=in&libero=sagittis&ut=dui&massa=vel&volutpat=nisl&convallis=duis&morbi=ac&odio=nibh&odio=fusce&elementum=lacus&eu=purus&interdum=aliquet&eu=at&tincidunt=feugiat&in=non&leo=pretium&maecenas=quis&pulvinar=lectus&lobortis=suspendisse&est=potenti&phasellus=in&sit=eleifend&amet=quam&erat=a&nulla=odio&tempus=in&vivamus=hac&in=habitasse&felis=platea&eu=dictumst&sapien=maecenas&cursus=ut&vestibulum=massa&proin=quis&eu=augue&mi=luctus&nulla=tincidunt&ac=nulla&enim=mollis&in=molestie&tempor=lorem" },
    { "publisher": "Youopia", "title": "A Mathematical Theory of Communication", "dateOfPublication": "5/7/2021", "facultyIds": "9", "journalLink": "http://cdbaby.com/habitasse.html?habitasse=mauris&platea=sit&dictumst=amet&aliquam=eros&augue=suspendisse&quam=accumsan&sollicitudin=tortor&vitae=quis&consectetuer=turpis&eget=sed&rutrum=ante&at=vivamus&lorem=tortor&integer=duis&tincidunt=mattis&ante=egestas&vel=metus&ipsum=aenean&praesent=fermentum&blandit=donec&lacinia=ut&erat=mauris&vestibulum=eget&sed=massa&magna=tempor&at=convallis&nunc=nulla&commodo=neque&placerat=libero&praesent=convallis&blandit=eget&nam=eleifend&nulla=luctus&integer=ultricies&pede=eu&justo=nibh&lacinia=quisque&eget=id&tincidunt=justo&eget=sit&tempus=amet&vel=sapien&pede=dignissim&morbi=vestibulum&porttitor=vestibulum&lorem=ante&id=ipsum&ligula=primis&suspendisse=in&ornare=faucibus&consequat=orci&lectus=luctus&in=et&est=ultrices&risus=posuere&auctor=cubilia&sed=curae&tristique=nulla&in=dapibus&tempus=dolor&sit=vel&amet=est&sem=donec&fusce=odio&consequat=justo&nulla=sollicitudin&nisl=ut&nunc=suscipit&nisl=a&duis=feugiat&bibendum=et&felis=eros&sed=vestibulum&interdum=ac&venenatis=est&turpis=lacinia&enim=nisi&blandit=venenatis&mi=tristique&in=fusce&porttitor=congue&pede=diam&justo=id&eu=ornare&massa=imperdiet&donec=sapien&dapibus=urna&duis=pretium&at=nisl&velit=ut&eu=volutpat&est=sapien&congue=arcu&elementum=sed&in=augue&hac=aliquam&habitasse=erat&platea=volutpat&dictumst=in" },
    { "publisher": "Oloo", "title": "The semantic Web", "dateOfPublication": "11/22/2014", "facultyIds": "10", "journalLink": "https://nytimes.com/tempus/sit/amet/sem.aspx?blandit=sed&mi=tincidunt&in=eu&porttitor=felis&pede=fusce&justo=posuere&eu=felis&massa=sed&donec=lacus&dapibus=morbi&duis=sem&at=mauris&velit=laoreet&eu=ut&est=rhoncus&congue=aliquet&elementum=pulvinar&in=sed&hac=nisl&habitasse=nunc&platea=rhoncus&dictumst=dui&morbi=vel&vestibulum=sem&velit=sed&id=sagittis&pretium=nam&iaculis=congue&diam=risus&erat=semper&fermentum=porta&justo=volutpat&nec=quam&condimentum=pede&neque=lobortis&sapien=ligula&placerat=sit&ante=amet&nulla=eleifend&justo=pede&aliquam=libero&quis=quis&turpis=orci&eget=nullam&elit=molestie&sodales=nibh&scelerisque=in&mauris=lectus&sit=pellentesque&amet=at&eros=nulla&suspendisse=suspendisse&accumsan=potenti&tortor=cras&quis=in&turpis=purus&sed=eu&ante=magna&vivamus=vulputate&tortor=luctus&duis=cum&mattis=sociis&egestas=natoque&metus=penatibus&aenean=et&fermentum=magnis&donec=dis&ut=parturient" },
    { "publisher": "Thoughtworks", "title": "Convex Optimizations", "dateOfPublication": "6/27/2007", "facultyIds": "11", "journalLink": "https://list-manage.com/posuere.json?consequat=enim&morbi=blandit&a=mi&ipsum=in&integer=porttitor&a=pede&nibh=justo&in=eu&quis=massa&justo=donec&maecenas=dapibus&rhoncus=duis&aliquam=at&lacus=velit&morbi=eu&quis=est&tortor=congue&id=elementum&nulla=in&ultrices=hac&aliquet=habitasse&maecenas=platea&leo=dictumst&odio=morbi&condimentum=vestibulum&id=velit&luctus=id&nec=pretium&molestie=iaculis&sed=diam&justo=erat&pellentesque=fermentum&viverra=justo&pede=nec&ac=condimentum&diam=neque&cras=sapien&pellentesque=placerat&volutpat=ante&dui=nulla&maecenas=justo&tristique=aliquam&est=quis&et=turpis&tempus=eget&semper=elit&est=sodales&quam=scelerisque&pharetra=mauris&magna=sit&ac=amet&consequat=eros&metus=suspendisse&sapien=accumsan&ut=tortor&nunc=quis&vestibulum=turpis&ante=sed&ipsum=ante&primis=vivamus" },
]

export default function PatentsPage() {
    return (
        <main className="w-full px-3 py-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                Patents
            </h1>
            <div className="container mx-auto py-10">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left font-medium">S.No.</TableHead>
                            <TableHead className="font-medium">Publisher</TableHead>
                            <TableHead className="font-medium">Title</TableHead>
                            <TableHead className="text-center font-medium w-40">Date of Publication</TableHead>
                            <TableHead className="text-center font-medium w-28">Faculty IDs</TableHead>
                            <TableHead className="text-center font-medium w-12">Link</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            patents.map((patent: Patent, index: number) => {
                                return (
                                    <TableRow key={index + 1}>
                                        <TableCell className="text-left font-medium">{index + 1}</TableCell>
                                        <TableCell className="text-left font-medium">{patent.title}</TableCell>
                                        <TableCell className="text-left font-medium">{patent.publisher}</TableCell>
                                        <TableCell className="text-center font-medium">{patent.dateOfPublication}</TableCell>
                                        <TableCell className="text-center font-medium">{patent.facultyIds}</TableCell>
                                        <TableCell className="text-center font-medium">
                                            <Link
                                                className="inline-flex hover:underline"
                                                href={patent.journalLink}
                                            >
                                                View
                                                <FaLink className="ml-1" />
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        </main>
    )
}
