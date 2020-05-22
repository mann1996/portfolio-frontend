import { Component, OnInit } from '@angular/core';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Link from '@editorjs/link';
import Image from '@editorjs/image';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import { FileUploadService } from '../service/file-upload.service';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss'],
})
export class PostEditorComponent implements OnInit {
  constructor(private fileUpload: FileUploadService) {}

  ngOnInit(): void {
    var fu = this.fileUpload;
    const editorjs = new EditorJS({
      holderId: 'editor-js',
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        link: {
          class: Link,
          inlineToolbar: true,
        },
        image: {
          class: Image,
          config: {
            uploader: {
              uploadByFile(file) {
                var path = `${'post_img'}/${'img'}_${new Date().getTime()}`;
                return fu.uploadFile(path, file).then((url) => {
                  return {
                    success: 1,
                    file: {
                      url: url,
                    },
                  };
                });
              },
            },
          },
        },
        embed: Embed,
      },
    });
  }
}
