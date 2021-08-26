alert("Congrats you just inherited a MILLION DOLLARS and a TIME MACHINE! We need you to create a couple supergroup's that you would like to join together. The music festival you are starting up is called Life's A Beach. Travel to any era and curate those bands! Dont worry they will have time to practice together." );
       
class Member {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }

    describe() {
    return `${this.name} plays ${this.instrument}.`;
    }
}

class Band {
    constructor(name) {
        this.name = name
        this.members = [];
    }

    addmember(member) {
        if(member instanceof Member) {
            this.members.push(member);
        } else {
            throw new Error(`You can only add and instance of Member. Argument is not a Member: ${member}`); 
        }
    }

    describe() {
        return `${this.name} has ${this.member.length} members.`;
    }

}

class Menu {
    constructor () {
        this.bands = [];
        this.selected = null;
    }
    start() {
       let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createBand();
                    break;
                case '2':
                    this.viewBand();
                    break;
                case '3':
                    this.removeBand();
                    break;
                case '4':
                    this.displayBands();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye, try not to spend that money all at once! Please look up the Butterfly Effect before you time travel.');
    }

    showMainMenuOptions(){
            return prompt(`
            0) Stop Creating Festival 
            1) Create New Band
            2) View & Edit Band Lineup
            3) Remove A Band
            4) Display All Bands playing Life's a Beach
            `);
        }

        showBandMenuOptions(bandInfo) {
            return prompt(`
            0) Back
            1) Add Musician 
            2) Remove Musician
            ----------------
            ${bandInfo}

            `);
        }

        displayBands() {
        let bandString = '';
        for (let i = 0; i < this.bands.length; i++) {

            bandString += i + ') ' + this.bands[i].name + '\n';
        }
        alert(bandString);
    }

    createBand() {
            let name = prompt('Enter name for Band:');
            this.bands.push(new Band(name));
        }

        // working here 
        viewBand(){
            console.log('got into viewBand');
            let index = prompt('Enter the index of the Band you wish to view:');
            if (index > -1 && index < this.bands.length) {
                this.selectedBand = this.bands[index];

                let description = 'Band Name: ' + this.selectedBand.name + '\n';

                for (let i = 0; i < this.selectedBand.members.length; i++) {
                    description += i + ') ' + this.selectedBand.members[i].name 
                        + ' - ' + this.selectedBand.members[i].instrument + '\n';    
            }

            let selection = this.showBandMenuOptions(description);

            switch (selection) {
                case '1':
                    this.addMember();
                    break;
                case '2': 
                this.removeMember();
                
            }
        }
    }
    removeBand() {
        let index = prompt('Enter the index of the band you wish to remove:');
        if (index > -1 && index < this.bands.length) {
            this.bands.splice(index, 1);
        }
    }

    addMember() {
        let name = prompt('Enter name for the new band member:');
        let instrument = prompt('What instrument do they play?');

        this.selectedBand.members.push(new Member(name, instrument));
    }

    removeMember() {
        let index = prompt('Enter the index of the Musician you wish to remove from the band:');
        if (index > -1 && index < this.selectedBand.members.length) {
            this.selectedBand.members.splice(index, 1);
        }
    }   
}

let menu = new Menu();
menu.start();
