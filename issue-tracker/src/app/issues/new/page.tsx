import React from 'react'
import {Button, TextArea, TextField} from "@radix-ui/themes";



const NewIssuePage = () => {
    // @ts-ignore
    return (
        <div className="max-w-xl space-y-3">
            <TextField.Root placeholder="Title" >
                <TextField.Slot>
                </TextField.Slot>
            </TextField.Root>
            <TextArea size="3" placeholder="Description" />
            <Button>Submit New Issue</Button>
        </div>
    )
}
export default NewIssuePage
