module.exports = {
	title: "watchlist",
	description: "Description d un film",
	type: "object",

//  parti pour les item de la watchlist
    // "item": {
    //     "type": "object",
		properties: {
            id: {
                "type": "string",
                "format": "uuid"
            },
			nom: {
				"type": "string"
			},
            proprietaire:{
                "type":"string"
            },
            liste:
                {
                    type:"array",
                    item:{
                        type:"object",
                        properties:{
                            itemid:{
                                "type":"string",
                               
                            },
                            statut:{
                                enum:["A_voir","en_cours","termine","abandonne"]
                                
                        }
                    }
                }
                
 
		},


	required: ["nom","proprietaire"],
	additionalProperties: false
}


}