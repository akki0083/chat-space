json.id @message.id
json.content @message.content
json.image @message.image
json.user_id @message.user_id
json.group_id @message.group_id
json.time @message.created_at.strftime("%Y/%m/%d(%a) %H:%M")
json.updated_at @message.updated_at
json.name @message.user.name
