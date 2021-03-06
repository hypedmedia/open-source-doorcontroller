export const enum DoorControllerEvents {
    createDoor = 'DoorController:AddDoor',
    createKey = 'DoorController:CreateKey',

    updateLockState = 'DoorController:UpdateLockstate',
    
    populateDoors = 'DoorController:PopulateDoors',
    setDefaultDoor = 'DoorController:SetDefaultDoor',
    removeDoor = 'DoorController:RemoveDoor',
    openWebview = 'DoorController:OpenWebview',
}