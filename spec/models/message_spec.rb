      # テキストと画像があれば保存できる
      it "is valid with a content, image" do
        expect(build(:message)).to be_valid
      end
      # テキストがあれば保存できる
      it "is valid with a content" do
        expect(build(:message, content: nil)).to be_valid
      end
      # 画像があれば保存できる
      it "is valid with a image" do
        expect(build(:message, image: nil)).to be_valid
      end
    end
      # テキストと画像がないと保存できない
      it "is invalid without a content and image" do
        message = build(:message, content: nil, image: nil)
        message.valid?
        expect(message.errors[:content]).to include("を入力してください")
      end
