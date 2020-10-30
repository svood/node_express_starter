import {TestModel} from '../models/testModel'

export class TestController {
    constructor() {
    }

    static create(req, res) {
        const model = new TestModel();
        const {data} = req.body;
        if (!data) return res.status(400).send({'massage': 'Where is my data ?'})
        if (data !== typeof "") return res.status(400).send({'massage': 'must be a string !'})

        return res.status(200).send({'massage': model.create(data)})

    }
}