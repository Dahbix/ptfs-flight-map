namespace SpriteKind {
    export const Text = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    FROM = game.askForString("From", 4)
    TO = game.askForString("To", 4)
    if (FROM == "IRFD") {
        COFROM = IRFD
    } else if (FROM == "IMLR") {
        COFROM = IMLR
    } else if (FROM == "IGAR") {
        COFROM = IGAR
    } else if (FROM == "ITRC") {
        COFROM = ITRC
    } else if (FROM == "ITKO") {
        COFROM = ITKO
    } else if (FROM == "IDCS") {
        COFROM = IDCS
    } else if (FROM == "IPPH") {
        COFROM = IPPH
    } else if (FROM == "ILKL") {
        COFROM = ILKL
    } else if (FROM == "ISCM") {
        COFROM = ISCM
    } else if (FROM == "IJAF") {
        COFROM = IJAF
    } else if (FROM == "IZOL") {
        COFROM = IZOL
    } else if (FROM == "IBTH") {
        COFROM = IBTH
    } else if (FROM == "ILAR") {
        COFROM = ILAR
    } else if (FROM == "IPAP") {
        COFROM = IPAP
    } else if (FROM == "IHEN") {
        COFROM = IHEN
    } else if (FROM == "IGRV") {
        COFROM = IGRV
    } else if (FROM == "ISAU") {
        COFROM = ISAU
    } else if (FROM == "ISKP") {
        COFROM = ISKP
    }
    if (TO == "IRFD") {
        COTO = IRFD
    } else if (TO == "IMLR") {
        COTO = IMLR
    } else if (TO == "IGAR") {
        COTO = IGAR
    } else if (TO == "ITRC") {
        COTO = ITRC
    } else if (TO == "ITKO") {
        COTO = ITKO
    } else if (TO == "IDCS") {
        COTO = IDCS
    } else if (TO == "IPPH") {
        COTO = IPPH
    } else if (TO == "ILKL") {
        COTO = ILKL
    } else if (TO == "ISCM") {
        COTO = ISCM
    } else if (TO == "IJAF") {
        COTO = IJAF
    } else if (TO == "IZOL") {
        COTO = IZOL
    } else if (TO == "IBTH") {
        COTO = IBTH
    } else if (TO == "ILAR") {
        COTO = ILAR
    } else if (TO == "IPAP") {
        COTO = IPAP
    } else if (TO == "IHEN") {
        COTO = IHEN
    } else if (TO == "IGRV") {
        COTO = IGRV
    } else if (TO == "ISAU") {
        COTO = ISAU
    } else if (TO == "ISKP") {
        COTO = ISKP
    }
    mySprite.image.drawLine(COFROM[0], COFROM[1], COTO[0], COTO[1], 3)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
blockMenu.onMenuOptionSelected(function (option, index) {
	
})
let COTO: number[] = []
let COFROM: number[] = []
let TO = ""
let FROM = ""
let ISKP: number[] = []
let ISAU: number[] = []
let IGRV: number[] = []
let IHEN: number[] = []
let IPAP: number[] = []
let ILAR: number[] = []
let IBTH: number[] = []
let IZOL: number[] = []
let IJAF: number[] = []
let ISCM: number[] = []
let ILKL: number[] = []
let IPPH: number[] = []
let IDCS: number[] = []
let ITKO: number[] = []
let ITRC: number[] = []
let IGAR: number[] = []
let IMLR: number[] = []
let IRFD: number[] = []
let mySprite: Sprite = null
mySprite = sprites.create(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888f77778888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888887f777788888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888777777888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888887777788888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888887777788888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888877777888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888887777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888887777888f88888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888887ff778f88888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888777fff888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888877777f888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888877788888888878888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888877778887777888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888887777887888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887778888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887f77887778888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887f7787778888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff7778888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777f77778888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777788888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777ff7777788888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777777888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888788877888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888778888888888888888888888888888888888885558888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888887778887888888888888888888888888887788855555888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888887777877888888888888888888888888f77788855555888888888888888888888888888888888
    88888888888888888888888888888888888887788888888888888888888888888888888888888888888887fff778888888888888888888888887f7788855555888888888888888888888888888888888
    888888888888888888888888888888888888877788888888888888888888888888888888888888888888877777788888888888888888888888887f788885555888888888888888888888888888888888
    8888888888888888888888888888888888888fff888888888888888888888888888888888888888888888877777888888888888888888888888888777885555588888888888888888888888888888888
    88888888888888888888888888888888888887778888888888888888888888888888888888888888888888777788888888888888888888888888777777755555f8888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777778855f58888888888888888888888888888888
    888888888888888888888888888888888888877888888888888888888888888888888888888888888888888888888888888888888888888888888777777778f588888888888888888888888888888888
    8888888888888888888888888888888888888778888888888888888888888888888888888888888888888888888888888888888888888888888887777777778888888888888888888888888888888888
    8888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888888888888888888888888888887777777777888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777fff888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777788888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fff8888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888788888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888877777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888887f777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888887f777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888887f777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888887777777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888777ff7fff78888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888877ff777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888877f7777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888877777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888877788888888888888888888888888888888777f788888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888887fff78888888888888888888888888888888777f788888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888877778888888888888888888888888888888877f788888888888888888888888888888888878888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888887788888888888888888888888888888888777778888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888788888888888888888888888888888777777777888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777777788888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877ff7777777788888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887ff77777777f778888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777f778888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777f778888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777778888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777777778888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887f77777777778888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887f77777777778888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877f77888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777788888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877788888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `, SpriteKind.Player)
IRFD = [68, 84]
IMLR = [72, 83]
IGAR = [66, 80]
ITRC = [72, 90]
ITKO = [74, 32]
IDCS = [76, 20]
IPPH = [99, 44]
ILKL = [76, 20]
ISCM = [116, 59]
IJAF = [127, 63]
IZOL = [125, 67]
IBTH = [87, 59]
ILAR = [103, 95]
IPAP = [111, 97]
IHEN = [97, 104]
IGRV = [38, 61]
ISAU = [35, 90]
ISKP = [106, 76]
