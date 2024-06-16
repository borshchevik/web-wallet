import insight from '@/libs/nodes/insight'
import borshInfo from '@/libs/nodes/borshInfo'

let nodeConfigs = {
    insight,
    borshInfo
}

const defaultNodeId = 'borshInfo'
let currentNodeId = defaultNodeId

export default {
    currentNode() {
        return nodeConfigs[currentNodeId]
    },

    setNodeId(nodeId) {
        if (nodeConfigs[nodeId]) {
            currentNodeId = nodeId
        }
    }
}
