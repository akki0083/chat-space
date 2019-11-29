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
