import { Dialog, Portal, Button, CloseButton } from "@chakra-ui/react"

interface RemoveDialogProps extends React.PropsWithChildren{
    callback: () => void
}

export default function RemoveDialog({children, callback} : RemoveDialogProps){

    return (
     <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Warning</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Are you sure you want to delete this entry. This is a permanent decision which cannot be undone in the future. If you are certain you want to delete this entry click the delete button below.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button onClick={callback}>Delete</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
    )
}