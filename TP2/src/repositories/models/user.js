module.exports = {
	title: "User",
	description: "Description d un utilisateur",
	type: "object",
	properties: {
        id: {
            "type": "string",
            "format": "uuid"
        },
		nom: {
			"type": "string"
		},
        date_naissance: {
            "type": "string"
        },
        prenom: {
            "type": "string"
        },
		mail_support: {
			"type": "string",
			"format": "email"
		},
        tabwatchlist:{
            "type": "array",
            "item":{
                "type":"string"
            } 
        }
	},
	
	required: ["nom","prenom","date_naissance","mail_support"],
	additionalProperties: false
}


