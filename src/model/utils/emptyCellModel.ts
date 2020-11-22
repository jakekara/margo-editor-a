import { CellModel } from "@jupyterlab/cells";

export default function emptyCellModel() {
    const ret = new CellModel({
        cell: {
            cell_type: "source",
            source: "",
            metadata: {}
        }
    })

    // ret.value.text = `# :: cell.id: '${ret.id}' ::\n`
    ret.value.text = `# placeholder source code for cell '${ret.id}' ::\n`
    console.log("Generated new cell model", ret.id)
    return ret;
}