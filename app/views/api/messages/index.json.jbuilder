json.array! @messages do |message|
  json.content message.content
  json.image message.image
  json.time message.created_at.strftime("%Y年%m月%d日(%a) %H:%M")
  json.name message.user.name
  json.id message.id
end
